import { useSelector } from 'react-redux'
import { startTimer, stopTimer, incrementAttempts, setElapsedTime, setStartTime, resetGame } from 'Features/gameStats/gameStatsSlice'

export const useGameStats = () => {
  const ticking = useSelector(state => state.gameStats.ticking)
  const attempts = useSelector(state => state.gameStats.attempts)
  const elapsedTime = useSelector(state => state.gameStats.elapsedTime)
  const startTime = useSelector(state => state.gameStats.startTime)

  return { ticking, attempts, elapsedTime, startTime, startTimer, stopTimer, incrementAttempts, setElapsedTime, setStartTime, resetGame }
}
