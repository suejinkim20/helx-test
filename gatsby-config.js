module.exports = {
  siteMetadata: {
    title: `helx-test-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-image`, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "icon": "src/images/icon.png"
      }
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-mdx`, 
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`, 
    'gatsby-transformer-yaml-full',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    { 
      resolve: `gatsby-source-filesystem`, 
      options: { 
        name: `content`, 
        path: `${ __dirname }/src/content` 
      }, 
    },
    { 
      resolve: `gatsby-source-filesystem`, 
      options: { 
        name: `homePage`, 
        path: `${ __dirname }/src/content/pages/home/homePage.yaml` 
      }, 
    },

  ]
};