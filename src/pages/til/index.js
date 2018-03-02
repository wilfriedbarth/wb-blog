import React from 'react';

/* eslint-disable-next-line */
export const query = graphql`
  query tilIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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
    {edges.map(({ node: { id, frontmatter: { title, date }, excerpt } }) => (
      <div key={id}>
        <h3>{title}</h3>
        <h5>{date}</h5>
        <p>{excerpt}</p>
      </div>
    ))}
  </div>
);
