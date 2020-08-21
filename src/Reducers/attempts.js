export const attempts = (state = 0, action) => {
  switch (action.type) {
    case 'INC_ATTEMPTS':
      return state + 1
    case 'RESET_ATTEMPTS':
      return 0
    default:
      return state
  }
}
