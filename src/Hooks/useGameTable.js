import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const useGameTable = () => {
  const ticking = useSelector(state => state.ticking)
  const cardList = useSelector(state => state.cardList)
  const attempts = useSelector(state => state.gameStats.attempts)
  const elapsedTime = useSelector(state => state.gameStats.elapsedTime)
  const [amountOfFlips, setAmountOfFlips] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    if (ticking) {
      if (cardList.every(card => card.found)) {
        gameOver()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardList, ticking])

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
        dispatch({ type: 'INC_ATTEMPTS' })
        break
      case 2:
        // eslint-disable-next-line no-case-declarations
        const flippedCards = cardList.filter(card => card.flipped && !card.found)
        if (!arrayEquals(flippedCards, [])) {
          const [card1, card2] = flippedCards
          if (card1.alt === card2.alt) {
            dispatch({ type: 'FOUND_CARD', id: card1.id })
            dispatch({ type: 'FOUND_CARD', id: card2.id })
          }
        }
        setAmountOfFlips(0)
        dispatch({ type: 'FLIP_BACK' })
        return
      default:
        break
    }

    setAmountOfFlips(amountOfFlips => amountOfFlips + 1)
    dispatch({ type: 'FLIP_CARD', id })
  }

  const gameOver = () => {
    dispatch({ type: 'STOP_TIMER' })
    // eslint-disable-next-line no-undef
    alert(`Attempts: ${attempts}, Elapsed Time: ${elapsedTime / 1000} seconds`)
    dispatch({ type: 'SET_BEST', attempts, elapsedTime })
    dispatch({ type: 'RESET' })
  }

  return { ticking, cardList, flipCardById, gameOver, arrayEquals }
}
