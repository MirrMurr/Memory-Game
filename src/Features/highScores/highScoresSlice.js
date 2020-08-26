import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  attempts: 0,
  elapsedTime: 0
}

const highScoresSlice = createSlice({
  name: 'highScores',
  initialState,
  reducers: {
    setBest (state, action) {
      const { attempts, elapsedTime } = action.payload
      if (attempts === 0 || elapsedTime === 0) return state
      state.attempts = attempts
      state.elapsedTime = elapsedTime
    }
  }
})

export const { setBest } = highScoresSlice.actions
export default highScoresSlice.reducer
