import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { pageTitle } from '../title';

// Turns "2026-01-15-wind-turbine.png" into "Wind turbine" for the alt text, so
// dropping a file in /photos needs no other input. Any leading date or number
// used for ordering is stripped. Name files descriptively.
const captionFromName = (name) => {
  const words = name
    .replace(/^\d{4}-\d{2}-\d{2}[-_]?/, '')
    .replace(/^\d+[-_]/, '')
    .replace(/[-_]+/g, ' ')
    .trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
};

export default function Photos({ data }) {
  const photos = data.allFile.nodes;

  return (
    <div className="container">
      <div className="photo-grid">
        {photos.map((photo) => (
          <figure className="photo" key={photo.id}>
            <GatsbyImage
              image={getImage(photo)}
              alt={captionFromName(photo.name)}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

// Every image in /photos, newest file first. Prefix filenames with a number
// or date if you want to control the order.
export const query = graphql`
  {
    allFile(
      filter: {
        sourceInstanceName: { eq: "photos" }
        childImageSharp: { id: { ne: null } }
      }
      sort: { name: DESC }
    ) {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 800, placeholder: BLURRED)
        }
      }
    }
  }
`;

export const Head = () => <title>{pageTitle('/photos')}</title>;
