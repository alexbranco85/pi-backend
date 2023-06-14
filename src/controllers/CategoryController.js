const products = require('../database/products.json')
const cats = require('../database/categorias.json')

const { Product, Categoria } = require('../models')

const CategoryController = {

  showProductByCategory: async (req, res) => {
    const { categoria } = req.params

    try {
      const catProducts = await Product.findAll({
        where: {
          id_produto_categoria: categoria
        }
      });

      const catName = await Categoria.findOne({
        where: {
          id: categoria
        }
      })

      res.status(200).json({catProducts, catName})
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // form: async (req, res) => {
  //   try {
  //     let categorias = await Categoria.findAll()
  //     res.render('admin/criar-categoria', { categorias })
  //   } catch (error) {
  //     res.status(400).json({ error })
  //   }
  // },
  // create: async (req, res) => {
  //   try {
  //     await Categoria.create({ ...req.body })
  //     res.redirect('/admin/')
  //   } catch (error) {
  //     res.status(400).json({ error })
  //   }
  // }
}
module.exports = CategoryController