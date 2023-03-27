import controllers from './../controllers/controllers.js'
const Controllers = new controllers()
import express from 'express';

const productsRouter = express.Router()

productsRouter.get('/', Controllers.getProducts)
productsRouter.get('/:id', Controllers.getProductById)
productsRouter.post('/', Controllers.addProduct)
productsRouter.put('/:id', Controllers.updateProduct)
productsRouter.delete('/:id', Controllers.deleteProduct)

export default productsRouter;