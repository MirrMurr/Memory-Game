import React from 'react'
import { FormattedTime } from 'Components/FormattedTime'
import PropTypes from 'prop-types'
import styles from './Statistics.module.scss'

export const Statistics = ({ attempts, time }) => {
  return (
    <div className={styles.statistics}>
      <span>{attempts}  |  </span>
      <FormattedTime time={time} />
    </div>
  )
}

Statistics.propTypes = {
  attempts: PropTypes.number,
  time: PropTypes.number
}
