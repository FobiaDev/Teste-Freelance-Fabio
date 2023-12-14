import { Product } from '../../enterprise/entities/product'

import { PaginationParams } from '../../../../core/repositories/pagination-params'

export interface ProductsRepository {
  fetchMany(params: PaginationParams): Promise<Product[]>
  totalCount(): Promise<number>
  create(product: Product): Promise<void>
}
