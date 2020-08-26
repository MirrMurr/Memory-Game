import { useSelector, useDispatch } from 'react-redux'
import { startTimer, resetGame } from 'store/gameStats'
import { resetCards } from 'store/cardList'

export const useStartStop = () => {
  const ticking = useSelector(state => state.gameStats.ticking)
  const dispatch = useDispatch()

  const start = () => {
    dispatch(startTimer())
  }

  const reset = () => {
    dispatch(resetGame())
    dispatch(resetCards())
  }

  return { ticking, start, reset }
}
