import { useState, useEffect } from 'react'
import store from 'Stores/appStore'

export const useTimer = () => {
  const { ticking, gameStats } = store.getState()
  const [timerTime, setTimerTime] = useState(0)

  useEffect(() => {
    setTimerTime(gameStats.elapsedTime)
    if (ticking) {
      const id = setInterval(() => tick(), 1000)
      return () => {
        clearInterval(id)
      }
    }
  }, [ticking, gameStats.elapsedTime])

  const tick = () => {
    setTimerTime(timerTime => timerTime + 1)
  }

  useEffect(() => {
    store.dispatch({ type: 'SET_ELAPSED_TIME', elapsedTime: timerTime })
  }, [timerTime])

  return timerTime
}
