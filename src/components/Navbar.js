import React from 'react';
import Link from 'gatsby-link';

import logo from './WB.jpg';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navBar}>
    <Link className={styles.navBarBrand} to="/">
      <img alt="logo" className={styles.navBarLogo} src={logo} />
    </Link>
    <Link className={styles.navBarLink} to="/til">
      <h4>Today I Learned (TIL)</h4>
    </Link>
  </nav>
);

export default Navbar;
