//look for .env.development or .env.prodution
//NODE_ENV is reserved during local testing + build
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
  siteMetadata: {
    title: "rock'n'box: a subscription box for music lovers and collectors...",
  },
  plugins: [
  	'gatsby-plugin-react-helmet', 
  	'gatsby-plugin-stripe-checkout',  	
  	{
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [
          require('path').resolve(__dirname, 'node_modules')
        ]
      }
    },
  ],
}
