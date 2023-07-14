import React from 'react';
import { Link } from 'gatsby';

import { nav, navLink } from './Nav.module.css';

const Nav = () => (
  <nav className={nav}>
    <Link className={navLink} to="/posts/">
      Posts
    </Link>
    |
    <Link className={navLink} to="/til/">
      Today I Learned
    </Link>
  </nav>
);

export default Nav;
