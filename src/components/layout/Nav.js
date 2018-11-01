import React from 'react';
import { Link } from 'gatsby';

import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <Link className={styles.navLink} to="/posts/">
      Posts
    </Link>
    |
    <Link className={styles.navLink} to="/til/">
      Today I Learned
    </Link>
  </nav>
);

export default Nav;
