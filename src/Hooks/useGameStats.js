import { useSelector } from 'react-redux'
import { startTimer, stopTimer, incrementAttempts, setAmountOfFlips, setElapsedTime, setStartTime, resetGame } from 'store/gameStats'

export const useGameStats = () => {
  const ticking = useSelector(state => state.gameStats.ticking)
  const amountOfFlips = useSelector(state => state.gameStats.amountOfFlips)
  const attempts = useSelector(state => state.gameStats.attempts)
  const elapsedTime = useSelector(state => state.gameStats.elapsedTime)
  const startTime = useSelector(state => state.gameStats.startTime)

  return { ticking, amountOfFlips, attempts, elapsedTime, startTime, startTimer, stopTimer, incrementAttempts, setAmountOfFlips, setElapsedTime, setStartTime, resetGame }
}
