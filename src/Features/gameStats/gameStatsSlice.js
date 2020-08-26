import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ticking: false,
  amountOfFlips: 0,
  attempts: 0,
  elapsedTime: 0,
  startTime: 0
}

const gameStatsSlice = createSlice({
  name: 'gameStats',
  initialState,
  reducers: {
    startTimer (state, action) {
      state.ticking = true
      state.startTime = Date.now()
    },
    stopTimer (state, action) {
      state.ticking = false
    },
    setAmountOfFlips (state, action) {
      state.amountOfFlips = action.payload
    },
    incrementAttempts (state, action) {
      state.attempts++
    },
    setElapsedTime (state, action) {
      state.elapsedTime = action.payload
    },
    setStartTime (state, action) {
      state.startTime = action.payload
    },
    resetGame: state => initialState
  }
})

export const { startTimer, stopTimer, incrementAttempts, setAmountOfFlips, setElapsedTime, setStartTime, resetGame } = gameStatsSlice.actions
export default gameStatsSlice.reducer
