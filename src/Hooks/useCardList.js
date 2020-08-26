import { useSelector } from 'react-redux'
import { initCards, flipCard, foundCard, flipBackNotFoundCards, resetCards } from 'store/cardList'

export const useCardList = () => {
  const cards = useSelector(state => state.cardList.cards)
  return { cards, initCards, flipCard, foundCard, flipBackNotFoundCards, resetCards }
}
