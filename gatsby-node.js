const path = require('path');

/**
 * Gives every markdown file in /blog a slug and a date, so a post only needs
 * frontmatter when you want to override what the filename already implies.
 *
 * A file named 2026-09-03-first-ride.md becomes /blog/first-ride/, dated
 * 2026-09-03. Frontmatter `slug` or `date` wins over either.
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== 'MarkdownRemark') return;

  const file = getNode(node.parent);
  if (!file || file.sourceInstanceName !== 'blog') return;

  const { createNodeField } = actions;
  const dateFromName = file.name.match(/^(\d{4}-\d{2}-\d{2})-/);

  const slug =
    node.frontmatter.slug ||
    file.name.replace(/^\d{4}-\d{2}-\d{2}-/, '').toLowerCase();

  createNodeField({ node, name: 'slug', value: slug });
  createNodeField({
    node,
    name: 'date',
    // Frontmatter first, then a date in the filename, then whenever the file
    // was last written — so an undated post still sorts sensibly.
    value:
      node.frontmatter.date ||
      (dateFromName && dateFromName[1]) ||
      file.modifiedTime,
  });
  // Without a frontmatter title, make the filename presentable:
  // "2026-08-01-braking-notes" becomes "Braking notes".
  const titleFromName = file.name
    .replace(/^\d{4}-\d{2}-\d{2}[-_]?/, '')
    .replace(/[-_]+/g, ' ')
    .trim();

  createNodeField({
    node,
    name: 'title',
    value:
      node.frontmatter.title ||
      titleFromName.charAt(0).toUpperCase() + titleFromName.slice(1),
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading blog posts', result.errors);
    return;
  }

  const template = path.resolve('./src/templates/post.js');

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/blog/${node.fields.slug}/`,
      component: template,
      context: { id: node.id },
    });
  });
};
