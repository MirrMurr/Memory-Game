import { useSelector } from 'react-redux'
import { initCards, flipCard, foundCard, flipBackNotFoundCards, resetCards } from 'Features/cardList/cardListSlice'

export const useCardList = () => {
  const cardList = useSelector(state => state.cardList)
  return { cardList, initCards, flipCard, foundCard, flipBackNotFoundCards, resetCards }
}
