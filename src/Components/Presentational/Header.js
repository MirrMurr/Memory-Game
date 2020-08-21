import React from 'react'

import { Counter } from 'Components/Container/Counter'
import { StartStopButton } from 'Components/Container/StartStopButton'
import { Highscores } from 'Components/Container/Highscores'

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
