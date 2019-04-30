import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/common/Seo';
import { graphql, Link } from 'gatsby';

import styles from './index.module.css';

/* eslint-disable-next-line */
export const query = graphql`
  query tilIndexQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "til" } } }
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
      keywords={[
        'Software',
        'Developer',
        'Tech',
        'Blog',
        'TIL',
        'Today I Learned',
      ]}
      title="TIL - Today I Learned"
    />
    <h2>TIL - Today I Learned</h2>
    <section className={styles.tilContainer}>
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
              <Link className={styles.tilLink} to={`/${slug}`}>
                <h3 className={styles.tilTitle}>{title}</h3>
              </Link>
              <h5 className={styles.tilDate}>{date}</h5>
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
