import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import styles from './index.module.css';
import './index.css';
import 'prismjs/themes/prism.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
          ]}
          title={data.site.siteMetadata.title}
        />
        <Header />
        <Nav />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    )}
  />
);

export default Layout;
