import React from 'react';
import Link from 'gatsby-link';

import styles from './index.module.css';

/* eslint-disable-next-line */
export const query = graphql`
  query tilIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

export default ({ data: { allMarkdownRemark: { totalCount, edges } } }) => (
  <div>
    <h2>Today I Learned (TIL) - {totalCount} TILs</h2>
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
              <h3>
                <Link className={styles.tilLink} to={slug}>
                  {title}
                </Link>
              </h3>
              <h5>{date}</h5>
            </header>
            <main>
              <p>{description}</p>
            </main>
          </article>
        ),
      )}
    </section>
  </div>
);
