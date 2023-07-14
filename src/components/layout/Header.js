import React from 'react';
import { Link } from 'gatsby';

import logo from './WB.jpg';
import {
  header,
  logoCss,
  taglineHeaderLink,
  taglineHeader,
  taglineSummary,
} from './Header.module.css';

const Header = () => (
  <header className={header}>
    <img alt="logo" className={logoCss} src={logo} />
    <div>
      <Link className={taglineHeaderLink} to="/">
        <h2 className={taglineHeader}>Wilfried Barth</h2>
      </Link>
      <p className={taglineSummary}>Software Engineer</p>
    </div>
  </header>
);

export default Header;
