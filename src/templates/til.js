import React from 'react';

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
  data: { markdownRemark: { frontmatter: { title, description }, html } },
}) => (
  <div className={styles.container}>
    <h2>{title}</h2>
    <i>{description}</i>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);
