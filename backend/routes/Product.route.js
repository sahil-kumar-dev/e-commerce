import express from 'express'
import { createProduct, fetchAllProducts } from '../controller/Prodcut.controller.js'

const router= express.Router()

router.post('/products',createProduct)
router.get('/products',fetchAllProducts)

export default router