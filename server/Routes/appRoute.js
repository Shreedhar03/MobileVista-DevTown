const { addProducts, getAllProducts, getSingleProducts, placeOrder, getAllOrders } = require('../Controllers/AppController')
const router = require('express').Router()

router.get('/addData', addProducts)
router.get('/products', getAllProducts)
router.get('/product/:id', getSingleProducts)
router.post('/place-order', placeOrder)
router.get('/orders', getAllOrders)

module.exports = router