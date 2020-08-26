import React from 'react'
import styles from './Highscores.module.scss'
import { Statistics } from 'components/common/Statistics/Statistics'
import { useHighScores } from 'hooks/useHighScores'

export const Highscores = () => {
  const { bestAttempts, bestTime } = useHighScores()

  return (
    <div className={styles.highscores}>
      <p>Highscores:</p>
      <Statistics attempts={bestAttempts} time={bestTime} />
    </div>
  )
}
