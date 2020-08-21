import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'

import store from 'Stores/appStore'

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
