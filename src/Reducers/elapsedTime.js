export const elapsedTime = (state = 0, action) => {
  switch (action.type) {
    case 'SET_ELAPSED_TIME':
      return action.time
    case 'RESET_TIMER':
      return 0
    default:
      return state
  }
}