import React from 'react';

/**
 * Renders text from site.config.js the way it was typed: a blank line starts
 * a new paragraph, a single Enter is a line break. HTML collapses both into
 * spaces on its own, so they have to be turned into real markup here.
 *
 * Each line is trimmed, so the indentation inside the config file never shows
 * up on the page.
 */
const toParagraphs = (text) =>
  text
    .split(/\n\s*\n/)
    .map((block) =>
      block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
    )
    .filter((lines) => lines.length > 0);

const Prose = ({ text }) => (
  <>
    {toParagraphs(text).map((lines, i) => (
      <p key={i}>
        {lines.map((line, j) => (
          <React.Fragment key={j}>
            {j > 0 && <br />}
            {line}
          </React.Fragment>
        ))}
      </p>
    ))}
  </>
);

export default Prose;
