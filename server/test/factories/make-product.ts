import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Product,
  ProductProps,
} from '@/domain/inventory/enterprise/entities/product'
import { Price } from '@/domain/inventory/enterprise/entities/value-objects/price'

import { faker } from '@faker-js/faker'

export function makeProduct(
  override: Partial<ProductProps> = {},
  id?: UniqueEntityID,
) {
  const product = Product.create(
    {
      title: faker.commerce.productName(),
      image: faker.image.url(),
      price: Price.create(Number(faker.commerce.price())),
      score: Number(faker.number.float({ min: 0, max: 10, precision: 0.1 })),
      ...override,
    },
    id,
  )

  return product
}
