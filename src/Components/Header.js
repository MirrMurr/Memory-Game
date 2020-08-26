import React from 'react'

import { Counter } from 'Components/Counter'
import { StartStopButton } from 'Components/StartStopButton'
import { Highscores } from 'Components/Highscores'

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <Highscores />
        <hr />
        <div className="game-stats">
          <Counter />
          <StartStopButton />
        </div>
      </div>
    </div>
  )
}
