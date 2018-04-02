module.exports = {
  siteMetadata: {
    description: "Wilfried Barth's Blog",
    title: 'WB Blog',
    siteUrl: 'https://www.wilfriedbarth.com',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        anonymize: true,
        head: false,
        respectDNT: true,
        trackingId: 'UA-82462198-2',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#f7f0eb',
        description: "Wilfried Barth's Blog",
        display: 'minimal-ui',
        name: 'WB Blog',
        short_name: 'WB Blog',
        start_url: '/',
        theme_color: '#212472',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-images',
          {
            resolve: 'gatsby-remark-prismjs',
            options: { classPrefix: 'language-' },
          },
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify',
  ],
};
