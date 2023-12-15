import { PrismaProductsRepository } from '../../../../../infra/database/prisma/repositories/inventory/prisma-products-repository'
import { FetchProductsUseCase } from '../fetch-products'

export function makeFetchProductsUseCase() {
  const productsRepository = new PrismaProductsRepository()
  const fetchProductsUseCase = new FetchProductsUseCase(productsRepository)

  return fetchProductsUseCase
}
