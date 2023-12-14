import { Either, success } from '../../../../core/either'
import { Product } from '../../enterprise/entities/product'
import { ProductsRepository } from '../repositories/products-repository'

export interface FetchProductsUseCaseRequest {
  page: number
  take?: number
}

type FetchProductsUseCaseResponse = Either<
  null,
  {
    products: Product[]
    total: number
  }
>

export class FetchProductsUseCase {
  constructor(private ProductsRepository: ProductsRepository) {}

  async handle({
    page = 1,
    take = 20,
  }: FetchProductsUseCaseRequest): Promise<FetchProductsUseCaseResponse> {
    const products = await this.ProductsRepository.fetchMany({ page, take })
    const total = await this.ProductsRepository.totalCount()

    return success({
      products,
      total,
    })
  }
}
