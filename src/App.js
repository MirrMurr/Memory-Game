import React from 'react'
import { Counter } from 'Components/Container/Counter'
import { StartStopButton } from 'Components/Container/StartStopButton'
import { Statistics } from 'Components/Presentational/Statistics'

import store from 'Stores/appStore'

import 'Stylesheets/styles.scss'

const calcBestTime = () => {
  const { elapsedTime } = store.getState()
  alert(elapsedTime)
  store.dispatch({ type: 'SET_BEST_TIME', time: elapsedTime })
  store.dispatch({ type: 'RESET_TIMER' })
}

const calcBestAttempts = () => {
  const { attempts } = store.getState()
  alert(attempts)
  store.dispatch({ type: 'SET_BEST_ATTEMPTS', attempts: attempts })
  store.dispatch({ type: 'RESET_ATTEMPTS' })
}

const gameOver = () => {
  store.dispatch({ type: 'STOP_TIMER' })
  calcBestTime()
  calcBestAttempts()
}

const incAttempts = () => {
  store.dispatch({ type: 'INC_ATTEMPTS' })
}

const App = () => {
  const { ticking, bestAttempts, bestTime } = store.getState()

  return (
    <div className="App">
      <Counter />
      <Statistics attempts={bestAttempts} time={bestTime} />
      <StartStopButton />
      <button disabled={!ticking} onClick={() => gameOver()}>End</button>
      <button disabled={!ticking} onClick={() => incAttempts()}>Card</button>
    </div>
  )
}

export default App
