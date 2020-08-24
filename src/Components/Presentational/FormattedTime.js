import React from 'react'
import PropTypes from 'prop-types'

export const FormattedTime = ({ time, showHour = false }) => {
  const seconds = ('0' + Math.floor(time / 1000) % 60).slice(-2)
  const minutes = ('0' + (Math.floor(time / 60000) % 60)).slice(-2)
  const hours = ('0' + Math.floor(time / 3600000) % 24).slice(-2)
  return (showHour
    ? <span>{hours}:{minutes}:{seconds}</span>
    : <span>{minutes}:{seconds}</span>
  )
}

FormattedTime.propTypes = {
  time: PropTypes.number,
  showHour: PropTypes.bool
}
