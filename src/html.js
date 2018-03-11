import React from 'react';
import favicon from './favicon.ico';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          dangerouslySetInnerHTML={{ __html: stylesStr }}
          id="gatsby-inlined-css"
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta content="ie=edge" httpEquiv="x-ua-compatible" />
          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />
          {this.props.headComponents}
          <link href={favicon} rel="shortcut icon" />
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            id="___gatsby"
            key={`body`}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
