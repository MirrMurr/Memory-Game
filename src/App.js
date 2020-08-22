import React from 'react'
import { Header } from 'Components/Presentational/Header'
import { GameTable } from 'Components/Container/GameTable'

import 'Stylesheets/styles.scss'

const App = () => {
  return (
    <div className="App">
      <Header />
      <GameTable />
    </div>
  )
}

export default App
