export const elapsedTime = (state = 0, action) => {
  switch (action.type) {
    case 'SET_ELAPSED_TIME':
      return action.elapsedTime
    case 'SET_BEST_TIME':
    case 'SET_BEST':
      return (action.elapsedTime < state || state === 0) ? action.elapsedTime : state
    case 'RESET':
      return 0
    default:
      return state
  }
}
