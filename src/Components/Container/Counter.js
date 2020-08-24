import React from 'react'
import { Statistics } from 'Components/Presentational/Statistics'
import { useSelector } from 'react-redux'
import { useTimer } from 'Hooks/useTimer'

export const Counter = () => {
  const { attempts } = useSelector(state => state.gameStats)
  const elapsedTime = useTimer()

  return (
    <div className="counter">
      <Statistics attempts={attempts} time={elapsedTime} />
    </div>
  )
}
