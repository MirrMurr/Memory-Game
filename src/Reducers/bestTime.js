export const bestTime = (state = 33, action) => {
  switch (action.type) {
    case 'SET_BEST_TIME':
      return action.time
    default:
      return state
  }
}
