import React from 'react'
import { useSelector } from 'react-redux'
import { Statistics } from 'components/common/Statistics/Statistics'
import { useTimer } from 'hooks/useTimer'

export const Counter = () => {
  const attempts = useSelector(state => state.gameStats.attempts)
  const elapsedTime = useTimer()

  return (
    <div className="counter">
      <Statistics attempts={attempts} time={elapsedTime} />
    </div>
  )
}
