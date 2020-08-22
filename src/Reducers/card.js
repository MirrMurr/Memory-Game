export const card = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      // eslint-disable-next-line no-case-declarations
      const { id, img, alt, flipped } = action
      return {
        id,
        img,
        alt,
        flipped
      }
    case 'FLIP_CARD':
      if (state.id !== action.id) return state
      if (state.found) return state
      return {
        ...state,
        flipped: !state.flipped
      }
    case 'FLIP_BACK':
      if (state.found) return state
      return {
        ...state,
        flipped: false
      }
    case 'FOUND_CARD':
      if (state.id !== action.id) return state
      return {
        ...state,
        found: true
      }
    case 'RESET':
      return {
        ...state,
        flipped: false,
        found: false
      }
    default:
      return state
  }
}
