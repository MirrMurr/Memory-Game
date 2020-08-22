export const card = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      const { id, img, alt, flipped } = action
      return {
        id,
        img,
        alt,
        flipped
      }
    case 'FLIP_CARD':
      if (state.id !== action.id) return state
      return {
        ...state,
        flipped: !state.flipped
      }
    default:
      return state
  }
}
