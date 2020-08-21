import { useState, useEffect } from 'react'
import store from 'Stores/appStore'

export const useTimer = () => {
  const { ticking, elapsedTime } = store.getState()
  const [timerTime, setTimerTime] = useState(0)

  useEffect(() => {
    setTimerTime(elapsedTime)
    if (ticking) {
      const id = setInterval(() => tick(), 1000)
      return () => {
        clearInterval(id)
      }
    }
  }, [ticking, elapsedTime])

  const tick = () => {
    setTimerTime(timerTime => timerTime + 1)
  }

  useEffect(() => {
    store.dispatch({ type: 'SET_ELAPSED_TIME', time: timerTime })
  }, [timerTime])

  return timerTime
}
