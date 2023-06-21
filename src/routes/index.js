const express = require('express')
const router = express.Router()

const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')

// Middlewares
const auth = require('../middlewares/auth')
const filterController = require('../controllers/FilterController')
const CategoryController = require('../controllers/CategoryController')
const userController = require('../controllers/UserController')


// # Products
router.get('/all', mainController.all);
router.get('/sale', mainController.sale);
router.get('/featured', mainController.featured);
router.get('/related/:categoria', mainController.related);
router.get('/produto/:sku', productController.showBySku)
router.delete('/product/:id', productController.delete)
router.post('/product', productController.create)
router.put('/product/:id', productController.update)

// # Category
router.get('/categoria/:categoria', CategoryController.showProductByCategory);

// # Usuário
router.post('/login', userController.login)
router.post('/user', userController.create)

// # Endereço
router.post('/saveaddress', userController.saveAddress)
router.get('/addressbyuser/:id', userController.showAddressByUser)

// router.get('/produtos/filter', (req, res) => {
//     res.send(req.query)
// })

// // GET ALL
// router.get('/', mainController.home);

// router.get('/quemsomos', quemSomosController.index);

// router.get('/minhaconta', auth, minhaContaController.index);

// router.get('/login', userController.loginEJS);

// router.get('/carrinho', carrinhoController.index);

// router.get('/listadedesejos', auth, listaController.index);

// // GET ALL
// router.get('/search', mainController.search)

// router.get('/categoria/:categoria', categoryController.showProductByCategory)

// router.post('/filter', filterController.filter)

// router.get('/produto/:sku', productController.showBySku)

// // ADMIN

// router.get('/admin', auth, productController.adminList);
// router.get('/admin/editar/:id', auth, productController.updateForm);
// router.put('/product/:id', auth, productController.updateEJS)
// router.get('/admin/criar', auth, productController.createFormEJS)

// 
// router.get('/todos', productController.all)

// router.get('/admin/criar-categoria', auth, categoryController.form)
// router.post('/category', auth, categoryController.create)

// // # Auth
// // POST - EJS Login
// 

// // # User
// // GET - EJS Create Form - View
// // router.get('/cadastro', userController.createFormEJS)
// // POST - EJS Create
// router.post('/user', userController.createEJS)

module.exports = router