import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/common/Seo';
import Comments from '../components/common/Comments';
import Layout from '../components/layout';
import { tilTitle, tilDescription, tilDivider } from './til.module.css';

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
    <div>
      <h2 className={tilTitle}>{title}</h2>
      <p className={tilDescription}>{description}</p>
      <hr className={tilDivider} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr className={tilDivider} />
      <Comments />
    </div>
  </Layout>
);

export default TIL;
