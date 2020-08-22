import { combineReducers } from 'redux'
import { ticking } from 'Reducers/ticking'
import { gameStats } from 'Reducers/gameStats'
import { highScores } from 'Reducers/highScores'
import { cardList } from 'Reducers/cardList'

export const rootReducer = combineReducers({
  ticking,
  gameStats,
  highScores,
  cardList
})
