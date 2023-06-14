const { Op } = require('sequelize')
const { Product } = require('../models')

const MainController = {
  featured: async (req, res) => {
    try {
      const featured = await Product.findAll({
        where: {
          destaque: 1
        }
      })
      res.status(200).json(featured)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  related: async (req, res) => {
    const { categoria } = req.params;

    try {
      const related = await Product.findAll({
        where: {
          categoria: categoria
        },
        order: sequelize.random(), // Adiciona uma ordenação aleatória
        limit: 4 // Limita o resultado a 4 registros
      })
      res.status(200).json(related)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  sale: async (req, res) => {
    if (req.query.keywords)
        search = req.query.keywords
    try {
      const sale = await Product.findAll({
        where: {
          oferta: 1
        }
      })
      res.status(200).json(sale)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  all: async (req, res) => {
    try {
      const products = await Product.findAll()
      res.status(200).json({catProducts: products, catName: {nome: 'Todos'}})
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  showAll: async (req, res) => {
    let search = ''

    if (req.query.keywords)
        search = req.query.keywords

    try {
      const products = await Product.findAll({
        where: {
          nome: {
            [Op.substring]: search
          }
        }
      })

      res.status(200).json(products)
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
module.exports = MainController