const { Produto } = require('../models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const ProductController = {

  showAll: (req, res) => {
    res.json(products)
  },
  showBySku: (req, res) => {
    const { sku } = req.params
    const product = products.find(product => product.sku === sku)
    res.render('produto', { product })
  },
  showById: (req, res) => {
    const { id } = req.params
    const product = products.find(product => String(product.id) === id)

    if (product)
      return res.json(product)
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },

  createFormEJS: (req, res) => {
    res.render('admin/criar')
  },
  // Create product
  createEJS: async (req, res) => {
    try {      
      let newProduct = {
        ...req.body,
      }

      await Produto.create(newProduct) // cria o registro no banco de dados

    } catch (error) {
      res.status(400).json({ error })
    }
  },

  updateFormEJS: (req, res) => {
    const { id } = req.params
    let product = products.find(product => product.id == id)
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