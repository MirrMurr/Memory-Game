import React from 'react'
import { useFetchData } from 'Hooks/useFetchData'
import { FlipCard } from 'Components/Presentational/Card'
import cardBackImg from 'Images/card-back-glossy-rounded.png'
import store from 'Stores/appStore'

export const GameTable = () => {
  useFetchData()
  const { cardList } = store.getState()
  const cardBack = <img className="card-back-img" src={cardBackImg} alt="card back" />

  const flipCard = (id) => {
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
