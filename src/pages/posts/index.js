import { graphql, Link } from 'gatsby';
import React from 'react';
import SEO from '../../components/common/Seo';
import Layout from '../../components/layout';

import { postLink, postTitle, postDate } from './index.module.css';

/* eslint-disable-next-line */
export const query = graphql`
  query postsIndexQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { frontmatter: { date: DESC } }
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

const Index = ({
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
              <Link className={postLink} to={`/${slug}`}>
                <h3 className={postTitle}>{title}</h3>
              </Link>
              <h5 className={postDate}>{date}</h5>
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

export default Index;
