import React from 'react'

import { Statistics } from 'Components/Statistics'
import { useHighScores } from 'Features/highScores/useHighScores'

export const Highscores = () => {
  const { bestAttempts, bestTime } = useHighScores()

  return (
    <div className="highscores">
      <p>Highscores:</p>
      <Statistics attempts={bestAttempts} time={bestTime} />
    </div>
  )
}
