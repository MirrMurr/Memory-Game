import { createSlice } from '@reduxjs/toolkit'
import { init, shuffle } from 'features/cardList/methods'

const initialState = {
  cards: []
}

const cardListSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    initCards: _ => ({ cards: init() }),
    flipCard: (state, action) => {
      const card = state.cards.find(card => card.id === action.payload)
      if (card) card.flipped = !card.flipped
    },
    foundCard: (state, action) => {
      const card = state.cards.find(card => card.id === action.payload)
      if (card) card.found = true
    },
    flipBackNotFoundCards: state => ({
      cards: state.cards.map(card => {
        return card.found ? card : { ...card, flipped: false }
      })
    }),
    resetCards: state => ({ cards: shuffle(state.cards.map(card => ({ ...card, flipped: false, found: false }))) })
  }
})

export const { initCards, flipCard, foundCard, flipBackNotFoundCards, resetCards } = cardListSlice.actions
export default cardListSlice.reducer
