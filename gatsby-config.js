/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and Clean Recipes Site',
    author: '@johnsmilga',
    person: {
      name: 'John',
      age: 32
    },
    simpleData: ['item1', 'item2'],
    complexData: [ 
      {name: 'John', age: 32},
      {name: 'Susan', age: 25}
  ]
  },
  plugins: [
    `gatsby-plugin-styled-components`, 
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7k0543788y2b`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
