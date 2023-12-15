import { Request, Response } from 'express'

import { makeFetchProductsUseCase } from '../../../../domain/inventory/application/use-case/factories/make-fetch-products-use-case'

class ListProducts {
  async handle(request: Request, response: Response) {
    const fetchProductsUseCase = makeFetchProductsUseCase()

    const result = await fetchProductsUseCase.handle({ page: 1 })

    if (result.isSuccess()) {
      const products = result.value.products.map((product) => ({
        id: product.id.toString(),
        title: product.title,
        image: product.image,
        price: product.price.toString().replace('.', ','),
        score: product.score,
      }))

      return response.status(200).json({
        products,
        total: result.value.total,
      })
    }
  }
}

export default new ListProducts()
