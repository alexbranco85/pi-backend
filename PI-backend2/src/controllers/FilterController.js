// const products = require('../database/products.json')
const { Op } = require('sequelize')
const { Produto } = require('../models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const filterController = {
  filter: async (req, res) => {
    const { marca } = req.body;
    try {
      let filteredProducts = await Produto.findAll({  
        where: {
          marca: { [Op.substring]: marca }
        }
      })
      res.render('todos', { products: filteredProducts });
    } catch (error) {
      res.status(400).json({ error })
    }
  },
}
module.exports = filterController