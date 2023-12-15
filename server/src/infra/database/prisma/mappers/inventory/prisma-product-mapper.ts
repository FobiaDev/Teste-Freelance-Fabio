import { Product as PrismaProduct, Prisma } from '@prisma/client'

import { Product } from '../../../../../domain/inventory/enterprise/entities/product'
import { Price } from '../../../../../domain/inventory/enterprise/entities/value-objects/price'
import { UniqueEntityID } from '../../../../../core/entities/unique-entity-id'

export class PrismaProductMapper {
  static toDomain(raw: PrismaProduct): Product {
    return Product.create(
      {
        title: raw.title,
        image: raw.image,
        price: Price.createFromCents(raw.priceCents),
        score: raw.score,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPersistence(product: Product): Prisma.ProductUncheckedCreateInput {
    return {
      id: product.id.toString(),
      title: product.title,
      image: product.image,
      priceCents: product.price.toValueInCents(),
      score: product.score,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    }
  }
}
