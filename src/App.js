import React from 'react'
import { Counter } from 'Components/Container/Counter'
import { StartStopButton } from 'Components/Container/StartStopButton'
import { Statistics } from 'Components/Presentational/Statistics'

import store from 'Stores/appStore'

import 'Stylesheets/styles.scss'

const calcScores = () => {
  const { attempts, elapsedTime } = store.getState().gameStats
  alert(`Attempts: ${attempts}, Elapsed Time: ${elapsedTime} seconds`)
  store.dispatch({ type: 'SET_BEST', attempts, elapsedTime })
}

const gameOver = () => {
  store.dispatch({ type: 'STOP_TIMER' })
  calcScores()
  store.dispatch({ type: 'RESET' })
}

const incAttempts = () => {
  store.dispatch({ type: 'INC_ATTEMPTS' })
}

const App = () => {
  const { ticking, highScores } = store.getState()

  return (
    <div className="App">
      <Counter />
      <Statistics attempts={highScores.attempts} time={highScores.elapsedTime} />
      <StartStopButton />
      <button disabled={!ticking} onClick={() => gameOver()}>End</button>
      <button disabled={!ticking} onClick={() => incAttempts()}>Attempt</button>
    </div>
  )
}

export default App
