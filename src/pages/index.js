import React from 'react';
import SEO from '../components/common/Seo';
import Layout from '../components/layout';

const Index = () => (
  <Layout>
    <SEO
      keywords={[
        'Software',
        'Developer',
        'Tech',
        'Blog',
        'About',
        'Wilfried',
        'Willie',
        'Barth',
      ]}
    />
    <section>
      <h2>Hey there!</h2>
      <p>
        I am a software engineer at{' '}
        <a href="https://www.capitalone.com/">Capital One</a> in Chicago.
        At work, I am hacking away in JavaScript, Typescript, and Golang.
      </p>
      <p>
        Drop me a line at{' '}
        <a href="mailto:wilfried.barth.prof@gmail.com">
          wilfried.barth.prof@gmail.com
        </a>
        , connect with me on{' '}
        <a href="https://www.linkedin.com/in/wilfriedbarth/">LinkedIn</a>, or
        check me out on <a href="https://github.com/wilfriedbarth">Github</a>.
      </p>
    </section>
  </Layout>
);

export default Index;
