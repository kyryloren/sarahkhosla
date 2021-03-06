require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Sarah Khosla`,
    description: `Sarah Khosla is a multi-disciplined graphic designer specializing in branding. She focuses on developing clear and conceptual identities across digital and print solutions.`,
    siteUrl: 'https://sarahkhosla.com',
    image: '/og.jpg',
    twitterUsername: '@khosla_sarah',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO,
        accessToken: process.env.GATSBY_PRISMIC_API,
        lang: '*',
        shouldDownloadImage: () => {
          return true;
        },
        schemas: {
          information: require('./src/schemas/information.json'),
          project: require('./src/schemas/project.json'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sarah-khosla`,
        short_name: `sarahkhosla`,
        start_url: `/`,
        background_color: `#FEFEFE`,
        theme_color: `#0C0C0D`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-NC54SL9GDK'],
      },
    },
    // We use this plugin to analyze our final javascript package bundle size
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-webpack-bundle-analyser-v2
    'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
};
