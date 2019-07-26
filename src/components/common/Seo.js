import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({ description, keywords, lang, title }) => (
  <StaticQuery
    query={graphql`
      query SeoQuery {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
    `}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description;
      return (
        <Helmet
          htmlAttributes={{ lang }}
          defaultTitle={data.site.siteMetadata.title}
          title={title}
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
          ].concat(
            keywords && keywords.length > 0
              ? {
                  name: 'keywords',
                  content: keywords.join(', '),
                }
              : [],
          )}
        >
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <script>
            {`
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-7274049254616874",
                enable_page_level_ads: true
              });
            `}
          </script>
        </Helmet>
      );
    }}
  />
);

SEO.defaultProps = {
  lang: 'en',
  keywords: [],
};

export default SEO;
