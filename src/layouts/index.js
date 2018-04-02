import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './index.module.css';
import './index.css';
import 'prismjs/themes/prism.css';

const TemplateWrapper = ({ children }) => (
  <div className={styles.container}>
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'Musings on the state of the techniverse',
        },
        { name: 'keywords', content: 'Wilfried, Barth, Tech, Blog' },
      ]}
      title="WB Blog"
    />
    <Header />
    <main className={styles.content}>{children()}</main>
    <Footer />
  </div>
);

export default TemplateWrapper;
