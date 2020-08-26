import React from 'react'
import { useGameTable } from 'Hooks/useGameTable'
import { FlipCard } from 'Components/FlipCard'
import cardBackImg from 'Images/card-back-glossy-rounded.png'

export const GameTable = () => {
  const { cardList, flipCardById } = useGameTable()

  const cardBack = <img className="card-back-img" src={cardBackImg} alt="card back" />

  return (
    <div className="game-table">
      <ul className="grid-container">
        {cardList.map(card => {
          const image = <img src={card.img} alt={card.alt} className="card-front-img" />
          return (
            <li key={card.id}>
              <FlipCard front={image} back={cardBack} flipped={card.flipped} onClick={() => flipCardById(card.id)} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
