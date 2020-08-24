import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const StartStopButton = () => {
  const dispatch = useDispatch()
  const { ticking } = useSelector(state => state)

  const start = () => {
    dispatch({ type: 'START_TIMER' })
    dispatch({ type: 'SET_START_TIME', time: Date.now() })
  }

  const stop = () => dispatch({ type: 'STOP_TIMER' })

  const reset = () => {
    dispatch({ type: 'STOP_TIMER' })
    dispatch({ type: 'RESET' })
  }

  return (
    <div>
      {(
        ticking
          ? <button className="reset-btn start-stop-btn" onClick={reset}>RESET</button>
          : <button className="play-btn start-stop-btn" onClick={start}>PLAY</button>
      )}
    </div>
  )
}
