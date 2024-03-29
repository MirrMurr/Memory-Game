import { configureStore } from '@reduxjs/toolkit'
import rootReducer from 'reducers/index'

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const store = configureStore({
  reducer: rootReducer
})

export default store
