import { combineReducers } from 'redux'
import { ticking } from 'Reducers/ticking'
import { bestTime } from 'Reducers/bestTime'
import { elapsedTime } from 'Reducers/elapsedTime'

export const rootReducer = combineReducers({
  ticking,
  elapsedTime,
  bestTime
})
