import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import styles from './til.module.css';

/* eslint-disable-next-line */
export const query = graphql`
  query tilQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;

export default ({
  data: {
    markdownRemark: {
      frontmatter: { title, description },
      html,
    },
  },
}) => (
  <Layout>
    <div className={styles.container}>
      <h2 className={styles.tilTitle}>{title}</h2>
      <p className={styles.tilDescription}>{description}</p>
      <hr className={styles.tilDivider} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </Layout>
);
