import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../../images/codea.png'

import styles from './styles.module.scss'

const Author = ({ name, biography }) => {
  return (
    <div className={styles.author}>
      <img className={styles.avatar} src={Avatar} alt={Avatar} />

      <div>
        <p>
          Un blog personal por <strong>{name}</strong>
        </p>
        <p>{biography}</p>
      </div>
    </div>
  )
}

Author.propTypes = { name: PropTypes.string, biography: PropTypes.string }

export default Author
