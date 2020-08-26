import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from 'App'

import store from 'Stores/appStore'
import { initCards } from 'Features/cardList/cardListSlice'

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

store.dispatch(initCards())
store.subscribe(render)
render()
