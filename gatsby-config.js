const path = require('path')
const ghostConfig = require('./ghostConfig.json')

module.exports = {
  pathPrefix: '/main-website',
  siteMetadata: {
    title: `cuHacking`,
    description: `We strive to give students the means to enhance their technical skills, make new friends, and create genuine connections with industry professionals so they can propel themselves to new heights.`,
    author: `@cuhacking`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        layouts: path.join(__dirname, 'src/layouts'),
        images: path.join(__dirname, 'src/images')
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cuHacking-main-website`,
        short_name: `cuHacking`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7c39bf`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-source-ghost`,
    //   options: ghostConfig
    // }
  ]
}
