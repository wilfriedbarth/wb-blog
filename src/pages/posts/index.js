import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/common/Seo';
import { graphql, Link } from 'gatsby';

import styles from './index.module.css';

/* eslint-disable-next-line */
export const query = graphql`
  query postsIndexQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
          excerpt
        }
      }
    }
  }
`;

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO
      keywords={['Software', 'Developer', 'Tech', 'Blog', 'Posts', 'Articles']}
      title="Posts"
    />
    <section>
      <h2>Posts</h2>
      {edges.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter: { title, description, date },
          },
        }) => (
          <article key={id}>
            <header>
              <Link className={styles.postLink} to={`/${slug}`}>
                <h3 className={styles.postTitle}>{title}</h3>
              </Link>
              <h5 className={styles.postDate}>{date}</h5>
            </header>
            <main>
              <p>{description}</p>
            </main>
          </article>
        ),
      )}
    </section>
  </Layout>
);
