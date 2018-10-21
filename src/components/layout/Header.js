import React from 'react';
import { Link } from 'gatsby';

import logo from './WB.jpg';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <img alt="logo" className={styles.logo} src={logo} />
    <div className={styles.tagline}>
      <Link className={styles.taglineHeaderLink} to="/">
        <h2 className={styles.taglineHeader}>Wilfried Barth</h2>
      </Link>
      <p className={styles.taglineSummary}>
        Software Engineer @{' '}
        <a
          className={styles.expediaLink}
          href="https://advertising.expedia.com/"
        >
          Expedia Group Media Solutions
        </a>
      </p>
    </div>
  </header>
);

export default Header;
