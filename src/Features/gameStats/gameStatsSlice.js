import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ticking: false,
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

export const { startTimer, stopTimer, incrementAttempts, setElapsedTime, setStartTime, resetGame } = gameStatsSlice.actions
export default gameStatsSlice.reducer
