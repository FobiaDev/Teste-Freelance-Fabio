import { Request, Response } from 'express'

import { makeFetchProductsUseCase } from '../../../../domain/inventory/application/use-case/factories/make-fetch-products-use-case'

class ListProducts {
  async handle(request: Request, response: Response) {
    const fetchProductsUseCase = makeFetchProductsUseCase()

    const result = await fetchProductsUseCase.handle({ page: 1 })

    if (result.isSuccess()) {
      return response.status(200).json({
        products: result.value.products,
        total: result.value.total,
      })
    }
  }
}

export default new ListProducts()
