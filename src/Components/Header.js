import React from 'react'
import styles from './Header.module.scss'
import { Counter } from 'Components/Counter'
import { StartStopButton } from 'Components/StartStopButton'
import { Highscores } from 'Components/Highscores'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Highscores />
        <hr />
        <div className={styles.gameStats}>
          <Counter />
          <StartStopButton />
        </div>
      </div>
    </div>
  )
}
