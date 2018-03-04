import React from 'react';

import styles from './til.module.css';

/* eslint-disable-next-line */
export const query = graphql`
  query tilQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

export default ({
  data: { markdownRemark: { frontmatter: { title, date }, html } },
}) => (
  <div className={styles.container}>
    <h1>{title}</h1>
    <h2>{date}</h2>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);
