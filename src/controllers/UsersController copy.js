const users = require('../database/users.json')
const {validationResult} = require('express-validator')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const UserController = {
  

  createFormEJS: (req, res) => {
    res.render('admin/criar')
  },
  // Create product
  createEJS: (req, res) => {
    let image = ''
    let newProduct = {
      id: Number(users[users.length - 1].id) + 1,
      ...req.body,
      image: image
    }
    users.push(newUser)
    res.redirect('/')
  },

  updateFormEJS: (req, res) => {
    const { id } = req.params
    let product = users.find(user => user.id == id)
    res.render('admin/editar', { product })
  },


  updateEJS: (req, res) => {
    const { id, nome } = req.params
    
    const productIndex = products.findIndex(product => String(product.id) === id) // índice
    let productToEdit = products.find(product => product.id == id) // objeto
    
    if (productIndex != -1) {


        productToEdit = {
          id: productToEdit.id,
          ...req.body,
        }

        products[productIndex] = productToEdit // atualiza

        res.redirect('/')
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },


  // Detail from one product
  detailEJS: (req, res) => {
    let id = req.params.id
    let product = products.find(product => product.id == id)
    res.render('detail', {
      product,
      toThousand
    })
  },

  deleteEJS: (req, res) => {
    const { id } = req.params
    const productIndex = products.findIndex(product => String(product.id) === id)

    if (productIndex != -1) {
      products.splice(productIndex, 1)
      res.redirect('/admin')
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  }
}
module.exports = ProductController