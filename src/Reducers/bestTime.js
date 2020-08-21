export const bestTime = (state = 0, action) => {
  switch (action.type) {
    case 'SET_BEST_TIME':
      return action.time < state || state === 0 ? action.time : state
    default:
      return state
  }
}
