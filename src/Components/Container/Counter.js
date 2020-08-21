import React from 'react'
import { Statistics } from 'Components/Presentational/Statistics'

import { useTimer } from 'Hooks/useTimer'

export const Counter = () => {
  const attempts = 17
  const elapsedTime = useTimer()

  return (
    <div className="counter">
      <Statistics attempts={attempts} time={elapsedTime} />
    </div>
  )
}
