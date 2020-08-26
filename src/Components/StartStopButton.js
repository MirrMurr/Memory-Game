import React from 'react'
import styles from './StartStopButton.module.scss'
import { useDispatch } from 'react-redux'
import { useGameStats } from 'Features/gameStats/useGameStats'
import { useCardList } from 'Features/cardList/useCardList'

export const StartStopButton = () => {
  const dispatch = useDispatch()
  const { ticking, startTimer, resetGame } = useGameStats()
  const { resetCards } = useCardList()

  const start = () => {
    dispatch(startTimer())
  }

  const reset = () => {
    dispatch(resetGame())
    dispatch(resetCards())
  }

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
