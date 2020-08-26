import React from 'react'
import { Statistics } from 'components/common/Statistics/Statistics'
import { useTimer } from 'hooks/useTimer'
import { useGameStats } from 'hooks/useGameStats'

export const Counter = () => {
  const { attempts } = useGameStats()
  const elapsedTime = useTimer()

  return (
    <div className="counter">
      <Statistics attempts={attempts} time={elapsedTime} />
    </div>
  )
}
