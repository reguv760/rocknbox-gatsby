//look for .env.development or .env.prodution
//NODE_ENV is reserved during local testing + build
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
  siteMetadata: {
    title: 'Gatsby Stripe Starter by RG',
  },
  plugins: [
  	'gatsby-plugin-react-helmet', 
  	`gatsby-plugin-sass`,
  	'gatsby-plugin-stripe-checkout'
  ],
}
