module.exports = {
  siteMetadata: {
    title: "Wilfried Barth's Blog",
    siteUrl: 'https://www.wilfriedbarth.com',
  },
  plugins: [
    'gatsby-plugin-netlify',
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
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
