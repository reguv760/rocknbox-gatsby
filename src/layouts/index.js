import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './../components/header'
import Footer from './../components/Footer'
import 'normalize.css'
import './index.scss'

import favIcon from './../assets/favicon/favicon-32x32.png'

const Layout = ({ children, data }) => (
  <div className="mainContainer">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'rocknbox description' },
        { name: 'keywords', content: 'rocknbox, susbscription, music, collection, funko' },
      ]}

      link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favIcon}` }
      ]}
    />
    
    <Header siteTitle={data.site.siteMetadata.title} />
    
    {/* main function load external pages */}
    { children() }

    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
