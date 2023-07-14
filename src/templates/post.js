import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Comments from '../components/common/Comments';
import SEO from '../components/common/Seo';
import {
  container,
  postTitle,
  postDescription,
  postDivider,
} from './post.module.css';

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
    <div>
      <h2 className={postTitle}>{title}</h2>
      <p className={postDescription}>{description}</p>
      <hr className={postDivider} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr className={postDivider} />
      <Comments />
    </div>
  </Layout>
);

export default Post;
