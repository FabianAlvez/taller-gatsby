import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import styles from './styles.module.scss'
import Author from './Author'

const Header = ({ siteTitle, authorName, biography }) => {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>
        <Link to="/">{siteTitle}</Link>
      </h1>

      <Author name={authorName} biography={biography} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  authorName: PropTypes.string,
  biography: PropTypes.string,
}

export default Header
