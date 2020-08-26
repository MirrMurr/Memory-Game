import React from 'react'
import { Statistics } from 'Components/Statistics'
import { useTimer } from 'Hooks/useTimer'
import { useGameStats } from 'Features/gameStats/useGameStats'

export const Counter = () => {
  const { attempts } = useGameStats()
  const elapsedTime = useTimer()

  return (
    <div className="counter">
      <Statistics attempts={attempts} time={elapsedTime} />
    </div>
  )
}
