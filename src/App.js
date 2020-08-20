import React, { useState, useEffect } from 'react'

function App () {
  const [ticking, setTicking] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    if (ticking) {
      const id = setInterval(() => tick(), 1000)
      return () => {
        clearInterval(id)
      }
    }
  }, [ticking])

  const tick = () => {
    setElapsedTime(elapsedTime => elapsedTime + 1)
  }

  const start = () => {
    setTicking(true)
  }

  const stop = () => {
    setTicking(false)
  }

  const startStop = () => {
    if (ticking) {
      stop()
    } else {
      start()
    }
  }

  return (
    <div className="App">
      <h1>{elapsedTime}</h1>
      <button onClick={startStop}>{ticking ? 'Pause' : 'Play'}</button>
    </div>
  )
}

export default App
