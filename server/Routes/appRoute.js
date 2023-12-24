const { addProducts, getAllProducts, getSingleProducts } = require('../Controllers/AppController')
const router = require('express').Router()

router.get('/addData', addProducts)
router.get('/products', getAllProducts)
router.get('/product/:id', getSingleProducts)

module.exports = router