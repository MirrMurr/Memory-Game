import { attempts } from 'Reducers/attempts'
import { elapsedTime } from 'Reducers/elapsedTime'

export const gameStats = (state = { attempts: 0, elapsedTime: 0 }, action) => {
  switch (action.type) {
    case 'INC_ATTEMPTS':
      return {
        ...state,
        attempts: attempts(state.attempts, action)
      }
    case 'SET_ELAPSED_TIME':
      return {
        ...state,
        elapsedTime: elapsedTime(state.elapsedTime, action)
      }
    case 'RESET':
      return {
        attempts: attempts(state.attempts, action),
        elapsedTime: elapsedTime(state.elapsedTime, action)
      }
    default:
      return state
  }
}
