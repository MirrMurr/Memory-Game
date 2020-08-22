import React, { useState, useEffect } from 'react'
import { useFetchData } from 'Hooks/useFetchData'
import { FlipCard } from 'Components/Presentational/Card'
import cardBackImg from 'Images/card-back-glossy-rounded.png'
import store from 'Stores/appStore'

const arrayEquals = (a, b) => {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
}

const calcScores = () => {
  const { attempts, elapsedTime } = store.getState().gameStats
  // eslint-disable-next-line no-undef
  alert(`Attempts: ${attempts}, Elapsed Time: ${elapsedTime} seconds`)
  store.dispatch({ type: 'SET_BEST', attempts, elapsedTime })
}

const gameOver = () => {
  store.dispatch({ type: 'STOP_TIMER' })
  calcScores()
  store.dispatch({ type: 'RESET' })
}

export const GameTable = () => {
  useFetchData()
  const { ticking, cardList } = store.getState()
  const [amountOfFlips, setAmountOfFlips] = useState(0)
  const cardBack = <img className="card-back-img" src={cardBackImg} alt="card back" />

  useEffect(() => {
    if (ticking) {
      const foundCards = cardList.filter(card => card.found)
      if (arrayEquals(foundCards, cardList)) {
        gameOver()
      }
    }
  }, [cardList, ticking])

  const flipCard = (id) => {
    if (!ticking) return
    if (amountOfFlips === 1) {
      store.dispatch({ type: 'INC_ATTEMPTS' })
    }
    if (amountOfFlips === 2) {
      const flippedCards = cardList.filter(card => card.flipped && !card.found)
      const card1 = flippedCards[0]
      const card2 = flippedCards[1]
      if (card1.alt === card2.alt) {
        store.dispatch({ type: 'FOUND_CARD', id: card1.id })
        store.dispatch({ type: 'FOUND_CARD', id: card2.id })
      }

      setAmountOfFlips(0)
      store.dispatch({ type: 'FLIP_BACK' })
      return
    }
    setAmountOfFlips(amountOfFlips => amountOfFlips + 1)
    store.dispatch({ type: 'FLIP_CARD', id })
  }

  return (
    <div className="game-table">
      <ul className="grid-container">
        {cardList.map(card => {
          const image = <img src={card.img} alt={card.alt} className="card-front-img" />
          return (
            <li key={card.id}>
              <FlipCard front={image} back={cardBack} flipped={card.flipped} onClick={() => flipCard(card.id)} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
