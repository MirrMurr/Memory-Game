export const attempts = (state = 0, action) => {
  switch (action.type) {
    case 'INC_ATTEMPTS':
      return state + 1
    case 'SET_BEST_ATTEMPTS':
    case 'SET_BEST':
      return (action.attempts < state || state === 0) ? action.attempts : state
    case 'RESET':
      return 0
    default:
      return state
  }
}
