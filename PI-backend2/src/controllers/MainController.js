//const products = require('../database/products.json')
const { Op } = require('sequelize')
const { Produto } = require('../models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const MainController = {
  index: async (req, res) => {
    try {
      const products = await Produto.findAll()

      res.status(200).json(products)
    } catch (error) {
      res.status(400).json({ error })
    } 
  },
  search: async (req, res) => {
    let search = req.query.keywords

    try {
      const productsToSearch = await Produto.findAll({
        where: {
          nome: {
            [Op.substring]: search
          }
        }
      })
      res.render('results', {
        products: productsToSearch,
        search,
        toThousand,
      })
    } catch (error) {
      res.status(400).json({ error })
    }

    // let productsToSearch = products.filter(product => product.nome.toLowerCase().includes(search))
    // res.render('results', {
    //   products: productsToSearch,
    //   search,
    //   toThousand,
    // })
  }
}


// const MainController = {
//   index: (req, res) => {
//     res.render('index', {
//       products,
//       toThousand
//     })
//   },
//   search: (req, res) => {
//     let search = req.query.keywords
//     let productsToSearch = products.filter(product => product.nome.toLowerCase().includes(search))
//     res.render('results', {
//       products: productsToSearch,
//       search,
//       toThousand,
//     })
//   }
// }

module.exports = MainController