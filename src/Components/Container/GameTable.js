import React from 'react'
import { useFetchData } from 'Hooks/useFetchData'
import { FlipCard } from 'Components/Presentational/Card'
import cardBackImg from 'Images/card-back-glossy-rounded.png'

export const GameTable = () => {
  const data = useFetchData()
  const cardBack = <img className="card-back-img" src={cardBackImg} alt="card back" />

  return (
    <div className="game-table">
      <ul className="grid-container">
        {data.map(card => {
          const image = <img src={card.img} alt={card.alt} className="card-front-img" />
          return (
            <li key={card.id}>
              <FlipCard front={image} back={cardBack} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
