import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setElapsedTime } from 'store/gameStats'

export const useTimer = () => {
  const { ticking, elapsedTime, startTime } = useSelector(state => state.gameStats)
  const [timerTime, setTimerTime] = useState(0)
  const dispatch = useDispatch()

  const tick = useCallback(() => {
    setTimerTime(Date.now() - startTime)
  }, [startTime])

  useEffect(() => {
    setTimerTime(elapsedTime)
    if (ticking) {
      const id = setInterval(() => tick(), 500)
      return () => {
        clearInterval(id)
      }
    }
  }, [ticking, elapsedTime, tick])

  useEffect(() => {
    dispatch(setElapsedTime(timerTime))
  }, [timerTime, dispatch])

  return timerTime
}
