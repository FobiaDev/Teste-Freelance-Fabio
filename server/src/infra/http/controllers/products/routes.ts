import { Router } from 'express'
import ListProducts from './list'

export const productRoutes = Router()

productRoutes.get('/', ListProducts.handle)
