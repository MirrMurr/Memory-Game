import { useSelector } from 'react-redux'

import { setBest } from 'store/highScores'

export const useHighScores = () => {
  const bestAttempts = useSelector(state => state.highScores.attempts)
  const bestTime = useSelector(state => state.highScores.elapsedTime)

  return { setBest, bestAttempts, bestTime }
}
