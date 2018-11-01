import React from 'react';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <section>
      <h2>Hey there!</h2>
      <p>
        I am a software engineer at{' '}
        <a href="https://www.expediagroup.com/">Expedia Group</a> in Chicago,
        working in the{' '}
        <a href="https://advertising.expedia.com/">Media Solutions</a> division.
        At work, I am hacking in Typescript, Java, and Scala these days. Outside
        work, I am dabbling in functional languages such as Clojure and Haskell.
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
