import { Entity } from '../../../../core/entities/entity'

import { UniqueEntityID } from '../../../../core/entities/unique-entity-id'

import { Price } from './value-objects/price'

export interface ProductProps {
  title: string
  image: string
  price: Price
  score: number
}

export class Product extends Entity<ProductProps> {
  get title() {
    return this.props.title
  }

  get image() {
    return this.props.image
  }

  get Price() {
    return this.props.price
  }

  get score() {
    return this.props.score
  }

  static create(props: ProductProps, id?: UniqueEntityID) {
    const product = new Product(props, id)

    return product
  }
}
