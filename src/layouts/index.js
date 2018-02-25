import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import styles from './index.module.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'Musings on the state of the techniverse',
        },
        { name: 'keywords', content: 'Wilfried, Barth, Tech, Blog' },
      ]}
      title="Wilfried Barth"
    />
    <Header />
    <div className={styles.container}>{children()}</div>
  </div>
);

export default TemplateWrapper;
