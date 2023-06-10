const { Op } = require('sequelize')
const { Product } = require('../models')

const MainController = {
  featured: async (req, res) => {
    if (req.query.keywords)
        search = req.query.keywords
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