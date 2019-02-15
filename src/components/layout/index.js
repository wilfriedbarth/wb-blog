import React from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import styles from './index.module.css';
import './index.css';
import 'prismjs/themes/prism.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <Nav />
    <main className={styles.content}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
