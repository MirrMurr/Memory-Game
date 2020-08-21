import React from 'react'
import { Statistics } from 'Components/Presentational/Statistics'

import { useTimer } from 'Hooks/useTimer'
import { useAttempts } from 'Hooks/useAttempts'

export const Counter = () => {
  const attempts = useAttempts()
  const elapsedTime = useTimer()

  return (
    <div className="counter">
      <Statistics attempts={attempts} time={elapsedTime} />
    </div>
  )
}
