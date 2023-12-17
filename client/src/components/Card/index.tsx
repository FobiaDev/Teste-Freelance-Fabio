import Image from 'next/image'

import styles from './style.module.scss'

export interface CardProps {
  title: string
  image: string
  price: string
  score: string
}

export const Card = ({ title, image, price, score }: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <Image src={image} alt='' fill />
      </div>

      <div className={styles.cardInfo}>
        <div>
          <span>{title}</span>
          <span className={styles.score}>{`Nota: ${score}`}</span>
        </div>
        <span>{`R$ ${price}`}</span>
      </div>
    </div>
  )
}
