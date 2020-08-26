import React from 'react'
import PropTypes from 'prop-types'
import styles from './FlipCard.module.scss'

export const FlipCard = ({ front, back, onClick, flipped }) => {
  return (
    <div className={styles.flipCard} onClick={() => onClick()}>
      <div className={`${styles.flipCardInner} ${flipped ? `${styles.flipped}` : ''}`}>
        <div className={styles.flipCardFront}>
          {front}
        </div>
        <div className={styles.flipCardBack}>
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
