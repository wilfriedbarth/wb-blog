import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Utterances from '../components/common/Utterances';
import SEO from '../components/common/Seo';
import styles from './post.module.css';

/* eslint-disable-next-line */
export const query = graphql`
  query postQuery($slug: String!) {
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

const Post = ({
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
      <h2 className={styles.postTitle}>{title}</h2>
      <p className={styles.postDescription}>{description}</p>
      <hr className={styles.postDivider} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Utterances />
    </div>
  </Layout>
);

export default Post;
