import React from 'react'
import styles from './GameTable.module.scss'
import { useGameTable } from './useGameTable'
import { FlipCard } from 'components/common/FlipCard/FlipCard'
import cardBackImg from 'images/card-back-glossy-rounded.png'

export const GameTable = () => {
  const { cards, flipCardById } = useGameTable()

  const cardBack = <img className={styles.cardBackImg} src={cardBackImg} alt="card back" />

  return (
    <div className={styles.gameTable}>
      <ul className={styles.gridContainer}>
        {cards.map(card => {
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
