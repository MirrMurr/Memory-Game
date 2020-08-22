import React from 'react'
import PropTypes from 'prop-types'

export const FlipCard = ({ front, back, onClick, flipped }) => {
  return (
    <div className="flip-card" onClick={() => onClick()}>
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          {front}
        </div>
        <div className="flip-card-back">
          {back}
        </div>
      </div>
    </div>
  )
}

FlipCard.propTypes = {
  front (a, b, c) { },
  back (a, b, c) { },
  onClick: PropTypes.func,
  flipped: PropTypes.bool
}
