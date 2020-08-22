import React from 'react'
import { Header } from 'Components/Presentational/Header'
import { GameTable } from 'Components/Container/GameTable'

import store from 'Stores/appStore'

import 'Stylesheets/styles.scss'

const calcScores = () => {
  const { attempts, elapsedTime } = store.getState().gameStats
  // eslint-disable-next-line no-undef
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
  const { ticking } = store.getState()

  return (
    <div className="App">
      <Header />
      <GameTable />
      <button disabled={!ticking} onClick={() => gameOver()}>End</button>
      <button disabled={!ticking} onClick={() => incAttempts()}>Attempt</button>
    </div>
  )
}

export default App
