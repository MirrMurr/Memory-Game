import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const useTimer = () => {
  const ticking = useSelector(state => state.ticking)
  const elapsedTime = useSelector(state => state.gameStats.elapsedTime)
  const startTime = useSelector(state => state.startTime)
  const [timerTime, setTimerTime] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimerTime(elapsedTime)
    if (ticking) {
      const id = setInterval(() => tick(), 200)
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
    dispatch({ type: 'SET_ELAPSED_TIME', elapsedTime: timerTime })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerTime])

  return timerTime
}
