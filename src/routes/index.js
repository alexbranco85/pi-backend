const express = require('express')
const router = express.Router()

const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')
const quemSomosController = require('../controllers/QuemSomos.js')
const categoryController = require('../controllers/CategoryController')
const minhaContaController = require('../controllers/MinhaContaController')
const carrinhoController = require('../controllers/CarrinhoController')
const listaController = require('../controllers/ListaController')
const userController = require('../controllers/UserController')
// # Main
// Middlewares
const auth = require('../middlewares/auth')
const filterController = require('../controllers/FilterController')

router.get('/produtos/filter', (req, res) => {
    res.send(req.query)
})


// GET ALL
router.get('/', mainController.index);

router.get('/quemsomos', quemSomosController.index);

router.get('/minhaconta', auth, minhaContaController.index);

router.get('/login', userController.loginEJS);

router.get('/carrinho', carrinhoController.index);

router.get('/listadedesejos', auth, listaController.index);

// GET ALL
router.get('/search', mainController.search)

router.get('/categoria/:categoria', categoryController.showProductByCategory)

router.post('/filter', filterController.filter)

router.get('/produto/:sku', productController.showBySku)

// ADMIN

router.get('/admin', auth, productController.adminList);
router.get('/admin/editar/:id', auth, productController.updateForm);
router.put('/product/:id', auth, productController.updateEJS)
router.get('/admin/criar', auth, productController.createFormEJS)
router.post('/product', auth, productController.createEJS)
router.delete('/product/:id', auth, productController.deleteEJS)
router.get('/todos', productController.all)

router.get('/admin/criar-categoria', auth, categoryController.form)
router.post('/category', auth, categoryController.create)

// # Auth
// POST - EJS Login
router.post('/login', userController.loginEJS)

// # User
// GET - EJS Create Form - View
router.get('/cadastro', userController.createFormEJS)
// POST - EJS Create
router.post('/user', userController.createEJS)

module.exports = router