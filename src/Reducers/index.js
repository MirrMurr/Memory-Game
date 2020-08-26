import { combineReducers } from 'redux'
import cardList from 'store/cardList'
import highScores from 'store/highScores'
import gameStats from 'store/gameStats'

export default combineReducers({
  gameStats,
  highScores,
  cardList
})
