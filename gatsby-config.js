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
  ],
};
