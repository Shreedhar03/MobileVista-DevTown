const { addProducts, getAllProducts } = require('../Controllers/AppController')
const router = require('express').Router()

router.get('/addData', addProducts)
router.get('/products', getAllProducts)

module.exports = router