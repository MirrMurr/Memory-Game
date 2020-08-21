import React from 'react'
import { Counter } from 'Components/Container/Counter'
import { StartStopButton } from 'Components/Container/StartStopButton'
import { Statistics } from 'Components/Presentational/Statistics'

import store from 'Stores/appStore'

import 'Stylesheets/styles.scss'

const endTimer = () => {
  store.dispatch({ type: 'STOP_TIMER' })
  const { bestTime, elapsedTime } = store.getState()
  const jobb = bestTime < elapsedTime ? bestTime : elapsedTime
  store.dispatch({ type: 'SET_BEST_TIME', time: jobb })
  store.dispatch({ type: 'RESET_TIMER' })
}

const endGame = () => {
  endTimer()
}

const App = () => {
  return (
    <div className="App">
      <Counter />
      <Statistics attempts={22} time={store.getState().bestTime} />
      <StartStopButton />
      <button onClick={() => endGame()}>End</button>
    </div>
  )
}

export default App
