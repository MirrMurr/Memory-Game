export const bestAttempts = (state = 0, action) => {
  switch (action.type) {
    case 'SET_BEST_ATTEMPTS':
      return action.attempts < state || state === 0 ? action.attempts : state
    default:
      return state
  }
}
