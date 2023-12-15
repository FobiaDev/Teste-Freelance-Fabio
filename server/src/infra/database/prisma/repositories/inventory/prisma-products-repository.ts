import { PaginationParams } from '../../../../../core/repositories/pagination-params'
import { ProductsRepository } from '../../../../../domain/inventory/application/repositories/products-repository'
import { Product } from '../../../../../domain/inventory/enterprise/entities/product'
import { prisma } from '../../../../../lib/prisma'
import { PrismaProductMapper } from '../../mappers/inventory/prisma-product-mapper'

export class PrismaProductsRepository implements ProductsRepository {
  async fetchMany({ take, page }: PaginationParams): Promise<Product[]> {
    const products = await prisma.product.findMany({
      take,
      skip: (page - 1) * take,
    })

    return products.map(PrismaProductMapper.toDomain)
  }

  async totalCount(): Promise<number> {
    const total = await prisma.product.count()

    return total
  }

  async create(product: Product): Promise<void> {
    const data = PrismaProductMapper.toPersistence(product)

    await prisma.product.create({ data })
  }
}
