import { createSlice } from '@reduxjs/toolkit'
import { init } from 'Features/cardList/methods'

const initialState = []

const cardListSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    initCards: _ => init(),
    flipCard (state, action) {
      const card = state.find(card => card.id === action.payload)
      if (card) card.flipped = !card.flipped
    },
    foundCard (state, action) {
      const card = state.find(card => card.id === action.payload)
      if (card) card.found = true
    },
    flipBackNotFoundCards: state => state.map(card => {
      return card.found ? card : { ...card, flipped: false }
    }),
    resetCards: state => state.map(card => ({ ...card, flipped: false, found: false }))
  }
})

export const { initCards, flipCard, foundCard, flipBackNotFoundCards, resetCards } = cardListSlice.actions
export default cardListSlice.reducer
