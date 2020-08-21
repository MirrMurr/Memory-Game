import { combineReducers } from 'redux'
import { ticking } from 'Reducers/ticking'
import { bestTime } from 'Reducers/bestTime'
import { elapsedTime } from 'Reducers/elapsedTime'
import { attempts } from 'Reducers/attempts'
import { bestAttempts } from 'Reducers/bestAttempts'

export const rootReducer = combineReducers({
  ticking,
  elapsedTime,
  bestTime,
  attempts,
  bestAttempts
})
