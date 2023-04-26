const products = require('../database/products.json')
const cats = require('../database/categorias.json')

const CategoryController = {
  showAll: (req, res) => {
    const { categoria } = req.params
    const catProducts = categoria != 4 ? products.filter(item => item.categoria == categoria) : products;
    const catName = cats.find(item => item.id == categoria)
    res.render('categoria', {catProducts, catName})
  },
  all: (req, res) => {
    res.render('todos', {products})
  }
}
module.exports = CategoryController