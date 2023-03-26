const express = require('express')
const router = express.Router()

const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')
const quemSomosController = require('../controllers/QuemSomos.js')
const categoryController = require('../controllers/CategoryController')

// # Main
// GET ALL
router.get('/', mainController.index);

router.get('/quemsomos', quemSomosController.index);


// GET ALL
router.get('/search', mainController.search)

router.get('/categoria/:categoria', categoryController.showAll)

router.get('/produto/:sku', productController.showBySku)

// # Product
// GET ALL
router.get('/product', productController.showAll)
// GET By Id
router.get('/product/:id', productController.showById)
// POST
router.post('/product', productController.create)
// PUT
router.put('/product/:id', productController.update)
// DELETE
router.delete('/product/:id', productController.delete)

// GET - EJS Detail
router.get('/product/detail/:id', productController.detailEJS)

module.exports = router