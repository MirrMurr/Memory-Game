import { card } from 'Reducers/card'

export const cardList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        card(undefined, action)
      ]
    case 'FLIP_CARD':
      return state.map(c => card(c, action))
    default:
      return state
  }
}
