import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/common/Seo';
import Utterances from '../components/common/Utterances';
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
        keywords
      }
    }
  }
`;

const TIL = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description, keywords },
      html,
    },
  },
}) => (
  <Layout>
    <SEO description={description} keywords={keywords} title={title} />
    <div className={styles.container}>
      <h2 className={styles.tilTitle}>{title}</h2>
      <p className={styles.tilDescription}>{description}</p>
      <hr className={styles.tilDivider} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Utterances />
    </div>
  </Layout>
);

export default TIL;
