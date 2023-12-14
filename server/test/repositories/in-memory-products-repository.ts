import { PaginationParams } from '@/core/repositories/pagination-params'
import { ProductsRepository } from '@/domain/inventory/application/repositories/products-repository'
import { Product } from '@/domain/inventory/enterprise/entities/product'

export class InMemoryProductsRepository implements ProductsRepository {
  public items: Product[] = []

  async fetchMany({ page, take }: PaginationParams) {
    const products = this.items.slice((page - 1) * take, page * take)

    return products
  }

  async totalCount() {
    const total = this.items.length

    return total
  }

  async create(product: Product) {
    this.items.push(product)
  }
}
