import React from 'react'

import store from 'Stores/appStore'

export const StartStopButton = () => {
  const { ticking } = store.getState()

  const start = () => {
    store.dispatch({ type: 'START_TIMER' })
  }

  const stop = () => {
    store.dispatch({ type: 'STOP_TIMER' })
  }

  return (
    <div>
      {(
        ticking
          ? <button className="pause-btn start-stop-btn" onClick={stop}>PAUSE</button>
          : <button className="play-btn start-stop-btn" onClick={start}>PLAY</button>
      )}
    </div>
  )
}
