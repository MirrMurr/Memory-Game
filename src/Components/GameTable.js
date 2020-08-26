import React from 'react'
import styles from './GameTable.module.scss'
import { useGameTable } from 'Hooks/useGameTable'
import { FlipCard } from 'Components/FlipCard'
import cardBackImg from 'Images/card-back-glossy-rounded.png'

export const GameTable = () => {
  const { cardList, flipCardById } = useGameTable()

  const cardBack = <img className="card-back-img" src={cardBackImg} alt="card back" />

  return (
    <div className={styles.gameTable}>
      <ul className={styles.gridContainer}>
        {cardList.map(card => {
          const image = <img src={card.img} alt={card.alt} className={styles.cardFrontImg} />
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
