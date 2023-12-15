import { Router } from 'express'
import { productRoutes } from './http/controllers/products/routes'

export const router = Router()

router.use('/product', productRoutes)
