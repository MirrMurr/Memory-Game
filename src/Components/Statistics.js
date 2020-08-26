import React from 'react'
import { FormattedTime } from 'Components/FormattedTime'
import PropTypes from 'prop-types'

export const Statistics = ({ attempts, time }) => {
  return (
    <div className="statistics">
      <span>{attempts}  |  </span>
      <FormattedTime time={time} />
    </div>
  )
}

Statistics.propTypes = {
  attempts: PropTypes.number,
  time: PropTypes.number
}
