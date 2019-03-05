import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import styles from './styles.module.scss'

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
      <div className={styles.root}>
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
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
