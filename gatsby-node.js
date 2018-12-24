const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const fileSource = getNode(node.parent).sourceInstanceName;
    const slug = createFilePath({
      node,
      getNode,
      basePath: `src/pages/${fileSource}`,
    });
    createNodeField({
      node,
      name: 'slug',
      value: `${fileSource}${slug}`,
    });
    createNodeField({
      name: 'collection',
      node,
      value: fileSource,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) =>
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                collection
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        switch (node.fields.collection) {
          case 'posts':
            createPage({
              path: node.fields.slug,
              component: path.resolve('./src/templates/post.js'),
              context: {
                slug: node.fields.slug,
              },
            });
            break;
          case 'til':
            createPage({
              path: node.fields.slug,
              component: path.resolve('./src/templates/til.js'),
              context: {
                slug: node.fields.slug,
              },
            });
            break;
          default:
            break;
        }
      });
      resolve();
    }),
  );
};
