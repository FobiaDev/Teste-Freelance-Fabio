import { Optional } from '../../../../core/@types/optional'
import { Entity } from '../../../../core/entities/entity'

import { UniqueEntityID } from '../../../../core/entities/unique-entity-id'

import { Price } from './value-objects/price'

export interface ProductProps {
  title: string
  image: string
  price: Price
  score: number
  createdAt: Date
  updatedAt?: Date | null
}

export class Product extends Entity<ProductProps> {
  get title() {
    return this.props.title
  }

  get image() {
    return this.props.image
  }

  get price() {
    return this.props.price
  }

  get score() {
    return this.props.score
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<ProductProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const product = new Product(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )

    return product
  }
}
