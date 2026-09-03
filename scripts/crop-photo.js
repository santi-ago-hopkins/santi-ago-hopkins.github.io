/**
 * Crops a portrait to a square, zoomed in on whatever you point it at.
 *
 *   node scripts/crop-photo.js <input> <output> [options]
 *
 *   --zoom 2.2        how far to crop in. 1 = the full frame.
 *   --cx 0.5 --cy 0.5 what to centre on, as a fraction of width/height.
 *   --strength 0      optional fisheye bulge. 0 = off, ~0.4 is pronounced.
 *   --size 900        output pixel size.
 *
 * Re-run this whenever you swap in a new portrait.
 */
const sharp = require('sharp');

const [input, output] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const flag = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : Number(process.argv[i + 1]);
};

if (!input || !output) {
  console.error('usage: node scripts/crop-photo.js <input> <output> [--zoom n] [--cx n] [--cy n] [--strength n]');
  process.exit(1);
}

const SIZE = flag('size', 900);
const strength = flag('strength', 0);
const zoom = flag('zoom', 1.5);
const cxFrac = flag('cx', 0.5);
const cyFrac = flag('cy', 0.5);
const power = 1 + strength;

// Materialise the EXIF rotation first: metadata() reports the pre-rotation
// dimensions, and raw pixel access ignores orientation entirely, so a phone
// photo would otherwise be cropped against the wrong axes.
sharp(input)
  .rotate()
  .toBuffer()
  .then(async (upright) => {
    const { width, height } = await sharp(upright).metadata();

    // Square crop of the requested zoom, centred on the focal point and
    // nudged back inside the image if it would hang over an edge.
    const side = Math.round(Math.min(width, height) / zoom);
    const left = Math.min(width - side, Math.max(0, Math.round(width * cxFrac - side / 2)));
    const top = Math.min(height - side, Math.max(0, Math.round(height * cyFrac - side / 2)));

    return sharp(upright)
      .extract({ left, top, width: side, height: side })
      .resize(SIZE, SIZE)
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
  })
  .then(({ data, info }) => {
    const { width, height, channels } = info;
    const out = Buffer.alloc(width * height * channels);
    const cx = (width - 1) / 2;
    const cy = (height - 1) / 2;
    // Normalise by the corner distance so the whole frame maps onto itself and
    // nothing has to be sampled from outside the source.
    const rMax = Math.hypot(cx, cy);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const dx = x - cx;
        const dy = y - cy;
        const r = Math.hypot(dx, dy);

        // Radius to read from: r^power pulls the centre outward (magnifying
        // it) and squeezes the edges, which is what reads as a fisheye.
        const srcR = rMax * Math.pow(r / rMax, power);
        const scale = r === 0 ? 0 : srcR / r;
        const sx = Math.min(width - 1, Math.max(0, cx + dx * scale));
        const sy = Math.min(height - 1, Math.max(0, cy + dy * scale));

        // Bilinear sample.
        const x0 = Math.floor(sx);
        const y0 = Math.floor(sy);
        const x1 = Math.min(width - 1, x0 + 1);
        const y1 = Math.min(height - 1, y0 + 1);
        const fx = sx - x0;
        const fy = sy - y0;

        const o = (y * width + x) * channels;
        for (let c = 0; c < channels; c++) {
          const p00 = data[(y0 * width + x0) * channels + c];
          const p10 = data[(y0 * width + x1) * channels + c];
          const p01 = data[(y1 * width + x0) * channels + c];
          const p11 = data[(y1 * width + x1) * channels + c];
          const top = p00 + (p10 - p00) * fx;
          const bottom = p01 + (p11 - p01) * fx;
          out[o + c] = Math.round(top + (bottom - top) * fy);
        }
      }
    }

    return sharp(out, { raw: { width, height, channels } })
      .jpeg({ quality: 92 })
      .toFile(output);
  })
  .then(() => console.log(`wrote ${output} (zoom ${zoom}, focus ${cxFrac}/${cyFrac}, strength ${strength})`))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
