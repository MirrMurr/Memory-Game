import { card } from 'Reducers/card'

export const cardList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        card(undefined, action)
      ]
    case 'FLIP_CARD':
    case 'FLIP_BACK':
    case 'FOUND_CARD':
    case 'RESET':
      return state.map(c => card(c, action))
    default:
      return state
  }
}
