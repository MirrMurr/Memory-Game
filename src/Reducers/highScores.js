import { attempts } from 'Reducers/attempts'
import { elapsedTime } from 'Reducers/elapsedTime'

export const highScores = (state = { attempts: 0, elapsedTime: 0 }, action) => {
  switch (action.type) {
    case 'SET_BEST':
      if (action.attempts === 0 || action.elapsedTime === 0) return state
      return {
        attempts: attempts(state.attempts, action),
        elapsedTime: elapsedTime(state.elapsedTime, action)
      }
    case 'SET_BEST_ATTEMPTS':
      return {
        ...state,
        attempts: attempts(state.attempts, action)
      }
    case 'SET_BEST_TIME':
      return {
        ...state,
        elapsedTime: elapsedTime(state.elapsedTime, action)
      }
    default:
      return state
  }
}
