import React from 'react';
import { Link, graphql } from 'gatsby';
import config from '../../site.config';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

export default function Post({ data }) {
  const { fields, html } = data.markdownRemark;

  return (
    <div className="container">
      <article className="post">
        <h1 className="post-title">{fields.title}</h1>
        <p className="post-date">{formatDate(fields.date)}</p>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
        <Link className="post-back" to="/blog/">
          ← All posts
        </Link>
      </article>
    </div>
  );
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        title
        date
      }
    }
  }
`;

export const Head = ({ data }) => (
  <title>{`${config.name} — ${data.markdownRemark.fields.title}`}</title>
);
