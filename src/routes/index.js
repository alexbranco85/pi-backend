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
const userController = require('../controllers/UsersController')
// # Main
// Middlewares
const auth = require('../middlewares/auth')


// GET ALL
router.get('/', mainController.index);

router.get('/quemsomos', quemSomosController.index);

router.get('/minhaconta', minhaContaController.index);

router.get('/login', userController.loginEJS);

router.get('/cadastro', cadastroController.index);

router.get('/carrinho', carrinhoController.index);

router.get('/listadedesejos', listaController.index);

// GET ALL
router.get('/search', mainController.search)

router.get('/categoria/:categoria', categoryController.showAll)

router.get('/produto/:sku', auth, productController.showBySku)

// ADMIN

router.get('/admin', adminController.showAll);
router.get('/admin/editar/:id', auth, adminController.updateForm);
router.put('/product/:id', auth, productController.updateEJS)

router.get('/admin/criar', auth, productController.createFormEJS)
router.post('/product', auth, productController.createEJS)

router.delete('/product/:id', auth, productController.deleteEJS)

router.get('/todos', categoryController.todos)
// router.get('/product/create', productController.createFormEJS)

// router.get('/product/update/:id', productController.updateFormEJS)

// router.post('/product', upload.any(), productController.createEJS)

// router.put('/product/:id', upload.any(), productController.updateEJS)

// # Auth
// GET - EJS Login Form - View
router.get('/user/login', userController.loginFormEJS)
// POST - EJS Login
router.post('/login', userController.loginEJS)

// # User
// GET - EJS Create Form - View
router.get('/user/create', userController.createFormEJS)
// POST - EJS Create
// router.post(
//     '/user',
//     body('name')
//         .notEmpty()
//         .withMessage('Nome do Usuário deve ser informado!'),
//     userController.createEJS
// )

module.exports = router