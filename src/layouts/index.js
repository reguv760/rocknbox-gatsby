import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './../components/header'
import Container from './../components/Container'
import Footer from './../components/Footer'
import 'normalize.css'
import './index.scss'

import favIcon from './../assets/favicon/favicon-32x32.png'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}

      link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favIcon}` }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    
    <Container>
      {children()}
    </Container>

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
