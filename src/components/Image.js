import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

/**
 * Renders an optimized image by filename, e.g. <Image src="me.jpeg" />.
 * The file must live in src/images/. Unlike StaticImage, `src` can be a
 * variable, which is what lets site.config.js own every filename.
 *
 * variant="square" crops to a centered square (used for the portrait).
 */
const Image = ({ src, alt = '', variant, className }) => {
  const data = useStaticQuery(graphql`
    query ImagesQuery {
      constrained: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          childImageSharp: { id: { ne: null } }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 1200, placeholder: BLURRED)
          }
        }
      }
      square: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          childImageSharp: { id: { ne: null } }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 264
              height: 264
              transformOptions: { cropFocus: CENTER }
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `);

  if (!src) return null;

  const nodes = variant === 'square' ? data.square.nodes : data.constrained.nodes;
  const node = nodes.find((n) => n.relativePath === src);

  if (!node) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Image "${src}" not found in src/images/`);
    }
    return null;
  }

  return <GatsbyImage image={getImage(node)} alt={alt} className={className} />;
};

export default Image;
