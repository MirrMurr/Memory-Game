import React from 'react'
import styles from './StartStopButton.module.scss'
import { useStartStop } from './useStartStop'

export const StartStopButton = () => {
  const { ticking, start, reset } = useStartStop()

  return (
    <div>
      {(
        ticking
          ? <button className={`${styles.resetBtn} ${styles.startStopBtn}`} onClick={reset}>RESET</button>
          : <button className={`${styles.playBtn} ${styles.startStopBtn}`} onClick={start}>PLAY</button>
      )}
    </div>
  )
}
