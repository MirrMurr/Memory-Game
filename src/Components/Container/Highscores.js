import React from 'react'
import { Statistics } from 'Components/Presentational/Statistics'

import store from 'Stores/appStore'

export const Highscores = () => {
  const { highScores } = store.getState()

  return (
    <div className="highscores">
      <p>Highscores:</p>
      <Statistics attempts={highScores.attempts} time={highScores.elapsedTime} />
    </div>
  )
}
