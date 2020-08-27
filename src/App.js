import React from 'react'
import { Header } from 'components/layout/Header/Header'
import { GameTable } from 'components/layout/GameTable/GameTable'

import 'styles.scss'

const App = () => {
  return (
    <div className="App">
      <Header />
      <GameTable />
    </div>
  )
}

export default App
