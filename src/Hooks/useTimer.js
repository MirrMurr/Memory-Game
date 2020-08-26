import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useGameStats } from 'Features/gameStats/useGameStats'

export const useTimer = () => {
  const { ticking, elapsedTime, startTime, setElapsedTime } = useGameStats()
  const [timerTime, setTimerTime] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimerTime(elapsedTime)
    if (ticking) {
      const id = setInterval(() => tick(), 500)
      return () => {
        clearInterval(id)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticking])

  const tick = () => {
    setTimerTime(Date.now() - startTime)
  }

  useEffect(() => {
    dispatch(setElapsedTime(timerTime))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerTime])

  return timerTime
}
