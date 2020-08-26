import React from 'react'
import { Header } from 'Components/Header'
import { GameTable } from 'Components/GameTable'

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
