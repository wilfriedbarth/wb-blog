import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/fontawesome-free-brands';
import { faEnvelopeSquare } from '@fortawesome/fontawesome-free-solid';

import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.socialMedia}>
      <li>
        <a href="mailto:wilfried.barth.prof@gmail.com">
          <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/wilfriedbarth/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </li>
      <li>
        <a href="https://github.com/wilfriedbarth">
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </a>
      </li>
    </ul>
    <small className={styles.copyright}>&copy; 2018 Wilfried Barth</small>
  </footer>
);

export default Footer;
