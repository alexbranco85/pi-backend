const express = require('express')
const router = express.Router()

const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')
const quemSomosController = require('../controllers/QuemSomos.js')
const categoryController = require('../controllers/CategoryController')
const adminController = require('../controllers/AdminController')
const minhaContaController = require('../controllers/MinhaContaController')
const loginController = require('../controllers/LoginController')
const cadastroController = require('../controllers/CadastroController')
const carrinhoController = require('../controllers/CarrinhoController')
const listaController = require('../controllers/ListaController')

// # Main
// GET ALL
router.get('/', mainController.index);

router.get('/quemsomos', quemSomosController.index);

router.get('/minhaconta', minhaContaController.index);

router.get('/login', loginController.index);

router.get('/cadastro', cadastroController.index);

router.get('/carrinho', carrinhoController.index);

router.get('/listadedesejos', listaController.index);

// GET ALL
router.get('/search', mainController.search)

router.get('/categoria/:categoria', categoryController.showAll)

router.get('/produto/:sku', productController.showBySku)

// ADMIN

router.get('/admin', adminController.showAll);
router.get('/admin/editar/:id', adminController.updateForm);
router.put('/product/:id', productController.updateEJS)

router.get('/admin/criar', productController.createFormEJS)
router.post('/product', productController.createEJS)

router.delete('/product/:id', productController.deleteEJS)

router.get('/todos', categoryController.todos)
// router.get('/product/create', productController.createFormEJS)

// router.get('/product/update/:id', productController.updateFormEJS)

// router.post('/product', upload.any(), productController.createEJS)

// router.put('/product/:id', upload.any(), productController.updateEJS)


module.exports = router