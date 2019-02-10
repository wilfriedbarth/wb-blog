module.exports = {
  siteMetadata: {
    title: 'WB Blog',
    description: 'Musings on the state of the techniverse',
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
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'til',
        path: `${__dirname}/src/pages/til`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: { classPrefix: 'language-' },
          },
        ],
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-remove-serviceworker'
  ],
};
