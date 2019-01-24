import React from 'react'
import PropTypes from 'prop-types'

import styles from './title-block.module.scss'

const TitleBlock = ({ title, className }) => (
  <div className={[styles.block].join(' ')}>
    <h1 className={styles.blockTitle} dangerouslySetInnerHTML={{
      __html: title
    }} />
  </div>
)

TitleBlock.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
}

TitleBlock.defaultProps = {
  className: '',
}

export default TitleBlock