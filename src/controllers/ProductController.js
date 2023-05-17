const { Produto, Categoria } = require('../models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const ProductController = {

  showAll: async (req, res) => {
    try {
      const products = await Produto.findAll()
      res.json(products)
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  all: async (req, res) => {
    try {
      const products = await Produto.findAll()
      res.render('todos', { products })
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  adminList: async (req, res) => {
    try {
      const products = await Produto.findAll()
      res.render('admin/index', { products: products })
    } catch (error) {
      res.status(400).json({ error })
    }
  },


  showBySku: async (req, res) => {
    const { sku } = req.params

    try {
      const product = await Produto.findOne({
        where: {
          sku: sku
        },
      })
      res.render('produto', {
        product
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  showById: (req, res) => {
    const { id } = req.params
    const product = products.find(product => String(product.id) === id)

    if (product)
      return res.json(product)
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },

  createFormEJS: async (req, res) => {
    try {
      let error;
      let categorias = await Categoria.findAll()
      res.render('admin/criar', { categorias, error })
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  // Create product
  createEJS: async (req, res) => {
    const skuCompare = await Produto.findOne({
      where: {
        sku: req.body.sku
      }
    })
    console.log("skuCompare", skuCompare)
    if(!skuCompare){
      try {
        let newProduct = {
          ...req.body
        }
        await Produto.create(newProduct)
        res.redirect('/admin/')
      } catch (error) {
        res.status(400).json({ error })
      }
    } else {
      let error = "O SKU do produto já existe."
      let categorias = await Categoria.findAll()
      res.render('admin/criar', { categorias, error })
    }
  },

  // Detail from one product
  detailEJS: async (req, res) => {

    const { id } = req.params

    try {
      const product = await Produto.findOne({
        where: {
          id: id
        },
      })

      res.render('detail', {
        product,
        toThousand
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  deleteEJS: async (req, res) => {
    const { id } = req.params

    // const productIndex = products.findIndex(product => product.sku == sku)
    try {
      await Produto.destroy({
        where: {
          id: id
        }
      }) // remove o registro do banco de dados
      res.redirect('/admin/')
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  updateForm: async (req, res) => {
    let id = req.params.id

    try {
      let productToEdit = await Produto.findByPk(id)
      let categorias = await Categoria.findAll()
      let error;
      res.render('admin/editar', { productToEdit, categorias, error })
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  updateEJS: async (req, res) => {
    const { id } = req.params
    console.log(req.params)
    console.log(id)

    try {
      const productToEdit = await Produto.findByPk(id)
      console.log(productToEdit)
      if (productToEdit != undefined) {
        let product = {
          ...req.body,
        }

        await Produto.update(
          product,
          {
            where: {
              id: id
            }
          }
        )
        res.redirect('/admin')
      } else return res.status(400).json({ error: 'Produto não encontrado.' })

    } catch (error) {
      res.status(400).json({ error })
    }
  },
}
module.exports = ProductController