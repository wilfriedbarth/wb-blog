import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
        <a href="https://www.linkedin.com/in/wilfriedbarth">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </li>
      <li>
        <a href="https://github.com/wilfriedbarth">
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </a>
      </li>
    </ul>
    <small className={styles.copyright}>
      &copy; {new Date().getFullYear()} Wilfried Barth
    </small>
  </footer>
);

export default Footer;
