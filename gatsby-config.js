require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
module.exports = {
  pathPrefix: `/secretanniversary`,
  // Autoload the site metadata.
  siteMetadata: {
      title: 'Secret Anniversary',
      description:
          '',
      author: 'Shikhar Dixit',
      image: '/shushing-face.png',
      social: {
          twitter: '@cross19xx',
          fbAppId: '100009436144652'
      }
  },

  // Gatsby plugins
  plugins: [
      `gatsby-plugin-react-helmet`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `images`,
              path: `${__dirname}/static`
          }
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: 'Secret Anniversary',
              short_name: 'SA',
              start_url: '/',
              background_color: '#FFFFFF',
              theme_color: '#FFFFFF',
              display: 'minimal-ui',
              icon: 'static/shushing-face.png' // This path is relative to the root of the site.
          }
      },
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: 'UA-138977349-1',
              head: false
          }
      }
  ]
};
