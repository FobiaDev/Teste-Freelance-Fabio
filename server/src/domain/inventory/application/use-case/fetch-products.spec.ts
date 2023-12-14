import { InMemoryProductsRepository } from 'test/repositories/in-memory-products-repository'
import { FetchProductsUseCase } from './fetch-products'
import { makeProduct } from 'test/factories/make-product'

let inMemoryProductsRepository: InMemoryProductsRepository
let sut: FetchProductsUseCase

describe('Fetch Products Use Case', () => {
  beforeEach(() => {
    inMemoryProductsRepository = new InMemoryProductsRepository()
    sut = new FetchProductsUseCase(inMemoryProductsRepository)
  })

  it('should be able to fetch products.', async () => {
    await inMemoryProductsRepository.create(makeProduct())
    await inMemoryProductsRepository.create(makeProduct())
    await inMemoryProductsRepository.create(makeProduct())

    const result = await sut.handle({ page: 1 })

    expect(result.isSuccess()).toBe(true)
    if (result.isSuccess()) {
      expect(result.value.products).toHaveLength(3)
      expect(result.value.total).toEqual(3)
    }
  })

  it('should be able to fetch paginated products.', async () => {
    await inMemoryProductsRepository.create(makeProduct())
    await inMemoryProductsRepository.create(makeProduct())
    await inMemoryProductsRepository.create(makeProduct())

    const result = await sut.handle({ page: 1, take: 2 })

    expect(result.isSuccess()).toBe(true)
    if (result.isSuccess()) {
      expect(result.value.products).toHaveLength(2)
      expect(result.value.total).toEqual(3)
    }
  })
})
