import React from 'react';
import Link from 'gatsby-link';

import logo from './WB.jpg';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Link className={styles.logoLink} to="/">
      <img alt="logo" className={styles.logo} src={logo} />
    </Link>
    <div className={styles.tagline}>
      <h2 className={styles.taglineHeader}>Wilfried Barth</h2>
      <p className={styles.taglineSummary}>
        I'm a web developer living in Chicago, IL, USA, currently working at
        Expedia as a Software Engineer I. I strive to constantly expand my
        technical knowledge and share it with others.
      </p>
    </div>
  </header>
);

export default Header;
