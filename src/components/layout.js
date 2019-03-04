/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            biography
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          authorName={data.site.siteMetadata.author}
          biography={data.site.siteMetadata.biography}
        />
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Taller con
            {` `}
            <a href="https://www.codea.com.mx">Codea</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
