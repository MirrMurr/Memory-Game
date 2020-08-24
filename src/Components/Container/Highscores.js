import React from 'react'
import { useSelector } from 'react-redux'
import { Statistics } from 'Components/Presentational/Statistics'

export const Highscores = () => {
  const { highScores } = useSelector(state => state)

  return (
    <div className="highscores">
      <p>Highscores:</p>
      <Statistics attempts={highScores.attempts} time={highScores.elapsedTime} />
    </div>
  )
}
