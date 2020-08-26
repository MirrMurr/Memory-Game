import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useGameStats } from 'Features/gameStats/useGameStats'
import { useHighScores } from 'Features/highScores/useHighScores'
import { useCardList } from 'Features/cardList/useCardList'
import { resetCards } from 'Features/cardList/cardListSlice'

export const useGameTable = () => {
  const { ticking, attempts, amountOfFlips, elapsedTime, incrementAttempts, resetGame, setAmountOfFlips } = useGameStats()
  const { cardList, flipCard, foundCard, flipBackNotFoundCards } = useCardList()
  const { setBest } = useHighScores()
  const dispatch = useDispatch()

  useEffect(() => {
    if (ticking) {
      if (cardList.every(card => card.found)) {
        gameOver()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardList, ticking])

  const gameOver = () => {
    dispatch(setBest({ attempts, elapsedTime }))
    // eslint-disable-next-line no-undef
    alert(`Attempts: ${attempts}, Elapsed Time: ${elapsedTime / 1000} seconds`)
    dispatch(resetGame())
    dispatch(resetCards())
  }

  const arrayEquals = (a, b) => {
    return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index])
  }

  const flipCardById = (id) => {
    if (!ticking) return
    if (cardList.find(card => card.id === id).found) return

    switch (amountOfFlips) {
      case 1:
        dispatch(incrementAttempts())
        break
      case 2:
        // eslint-disable-next-line no-case-declarations
        const flippedCards = cardList.filter(card => card.flipped && !card.found)
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

  return { ticking, cardList, attempts, flipCardById, gameOver, arrayEquals }
}
