import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

import styles from './Statistics.module.scss'

export const Statistics = ({ attempts, time }) => {
  return (
    <div className={styles.statistics}>
      <span>{attempts}  |  </span>
      <span>{format(time, 'mm:ss')}</span>
    </div>
  )
}

Statistics.propTypes = {
  attempts: PropTypes.number,
  time: PropTypes.number
}
