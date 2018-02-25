import React from 'react';
import Link from 'gatsby-link';

import styles from './Header.module.css';

const Header = () => (
  <nav className={styles.navBar}>
    <Link className={styles.navBarBrand} to="/">
      <h4>Wilfried Barth</h4>
    </Link>
    <Link className={styles.navBarLink} to="/til">
      <h4>Today I Learned (TIL)</h4>
    </Link>
  </nav>
);

export default Header;
