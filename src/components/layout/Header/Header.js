import React from 'react'
import styles from './Header.module.scss'
import { Counter } from 'components/views/Counter/Counter'
import { StartStopButton } from 'components/views/StartStopButton/StartStopButton'
import { Highscores } from 'components/views/Highscores/Highscores'

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
