import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { flipCard, foundCard, flipBackNotFoundCards, resetCards } from 'store/cardList'
import { incrementAttempts, setAmountOfFlips, resetGame } from 'store/gameStats'
import { setBest } from 'store/highScores'

export const useGameTable = () => {
  const cards = useSelector(state => state.cardList.cards)

  const ticking = useSelector(state => state.gameStats.ticking)
  const amountOfFlips = useSelector(state => state.gameStats.amountOfFlips)
  const attempts = useSelector(state => state.gameStats.attempts)
  const elapsedTime = useSelector(state => state.gameStats.elapsedTime)

  const dispatch = useDispatch()

  const gameOver = useCallback(() => {
    dispatch(setBest({ attempts, elapsedTime }))
    window.alert(`Attempts: ${attempts}, Elapsed Time: ${elapsedTime / 1000} seconds`)
    dispatch(resetGame())
    dispatch(resetCards())
  }, [attempts, elapsedTime, dispatch])

  useEffect(() => {
    if (ticking) {
      if (cards.every(card => card.found)) {
        gameOver()
      }
    }
  }, [cards, ticking, gameOver])

  const arrayEquals = (a, b) => {
    return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index])
  }

  const flipCardById = (id) => {
    if (!ticking) return
    if (cards.find(card => card.id === id).found) return

    switch (amountOfFlips) {
      case 1:
        dispatch(incrementAttempts())
        break
      case 2:
        const flippedCards = cards.filter(card => card.flipped && !card.found)
        if (!arrayEquals(flippedCards, [])) {
          const [card1, card2] = flippedCards
          if (card1.alt === card2.alt) {
            dispatch(foundCard(card1.id))
            dispatch(foundCard(card2.id))
          }
        }
        dispatch(setAmountOfFlips(0))
        dispatch(flipBackNotFoundCards())
        return
      default:
        break
    }

    dispatch(setAmountOfFlips(amountOfFlips + 1))
    dispatch(flipCard(id))
  }

  return { cards, flipCardById }
}
