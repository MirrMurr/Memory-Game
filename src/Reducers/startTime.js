export const startTime = (state = 0, action) => {
  switch (action.type) {
    case 'SET_START_TIME':
      return action.time
    default:
      return state
  }
}
