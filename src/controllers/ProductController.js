const { Product, Categoria } = require('../models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const ProductController = {

  showAll: async (req, res) => {
    try {
      const products = await Product.findAll()
      res.json(products)
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  all: async (req, res) => {
    try {
      const products = await Product.findAll()
      res.render('todos', { products })
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  adminList: async (req, res) => {
    try {
      const products = await Product.findAll()
      res.render('admin/index', { products: products })
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  showBySku: async (req, res) => {
    const { sku } = req.params
    try {
      const product = await Product.findOne({
        where: {
          sku: sku
        }
      });
      res.status(200).json( product )
    } catch (error) {
      res.status(400).json({ error })
    }
  },


  showById: (req, res) => {
    const { id } = req.params
    const product = products.find(product => String(product.id) === id)

    if (product)
      return res.json(product)
    else return res.status(400).json({ error: 'Product não encontrado.' })
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
  create: async (req, res) => {
    const skuCompare = await Product.findOne({
      where: {
        sku: req.body.sku
      }
    })

    if(!skuCompare){
      try {
        let newProduct = {
          ...req.body
        }
        await Product.create(newProduct)
        res.status(200).json({msg: 'Produto criado com sucesso!'})
      } catch (error) {
        res.status(400).json({ error })
      }
    } else {
      res.status(400).json({error: 'Produto com sku já existente!'})
    }
  },

  // Detail from one product
  detailEJS: async (req, res) => {

    const { id } = req.params

    try {
      const product = await Product.findOne({
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

  delete: async (req, res) => {
    const { id } = req.params

    try {
      await Product.destroy({
        where: {
          id: id
        }
      }) // remove o registro do banco de dados
      res.status(200).json({msg: 'Produto excluído com sucesso'})
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  updateForm: async (req, res) => {
    let id = req.params.id

    try {
      let productToEdit = await Product.findByPk(id)
      let categorias = await Categoria.findAll()
      let error;
      res.render('admin/editar', { productToEdit, categorias, error })
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  update: async (req, res) => {
    const { id } = req.params

    try {
      const productToEdit = await Product.findByPk(id)
      if (productToEdit != undefined) {
        let product = {
          ...req.body,
        }

        await Product.update(
          product,
          {
            where: {
              id: id
            }
          }
        )
        res.status(200).json({ msg: 'Produto editado com sucesso.' })
      } else return res.status(400).json({ error: 'Product não encontrado.' })

    } catch (error) {
      res.status(400).json({ error })
    }
  },
}
module.exports = ProductController