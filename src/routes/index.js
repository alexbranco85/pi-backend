const express = require('express')
const router = express.Router()

const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')
const quemSomosController = require('../controllers/QuemSomos.js')
const categoryController = require('../controllers/CategoryController')
const adminController = require('../controllers/AdminController')

// # Main
// GET ALL
router.get('/', mainController.index);

router.get('/quemsomos', quemSomosController.index);

// GET ALL
router.get('/search', mainController.search)

router.get('/categoria/:categoria', categoryController.showAll)

router.get('/produto/:sku', productController.showBySku)

// ADMIN

router.get('/admin', adminController.showAll);

router.delete('/admin/excluir/:id', adminController.delete);

router.get('/admin/editar/:sku', adminController.updateForm);
router.put('/admin/editado/:sku', adminController.updateProduct)



module.exports = router