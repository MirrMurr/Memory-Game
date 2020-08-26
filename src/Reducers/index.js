import { combineReducers } from 'redux'
import cardList from 'Features/cardList/cardListSlice'
import highScores from 'Features/highScores/highScoresSlice'
import gameStats from 'Features/gameStats/gameStatsSlice'

export default combineReducers({
  gameStats,
  highScores,
  cardList
})
