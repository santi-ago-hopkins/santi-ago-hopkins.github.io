import React from 'react';
import { Link, graphql } from 'gatsby';
import config from '../../site.config';
import { pageTitle } from '../title';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

export default function Blog({ data }) {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <div className="container">
      <div className="blog-list">
        {posts.length === 0 ? (
          <p className="blog-empty">{config.blogEmptyText}</p>
        ) : (
          posts.map(({ id, fields }) => (
            <Link className="blog-row" key={id} to={`/blog/${fields.slug}/`}>
              <span className="blog-title">{fields.title}</span>
              <span className="blog-date">{formatDate(fields.date)}</span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

// Newest first. Everything comes from the files in /blog.
export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: { date: DESC } }) {
      nodes {
        id
        fields {
          slug
          title
          date
        }
      }
    }
  }
`;

export const Head = () => <title>{pageTitle('/blog')}</title>;
