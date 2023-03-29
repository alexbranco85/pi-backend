const products = require('../database/products.json')
const cats = require('../database/categorias.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const CategoryController = {
  showAll: (req, res) => {
    const { categoria } = req.params
    const catProducts = products.filter(item => item.categoria == categoria.toLowerCase())
    const catName = cats.find(item => item.id == categoria)
    res.render('categoria', {catProducts, catName})
  },
  todos: (req, res) => {
    res.render('todos', products)
  },
}
module.exports = CategoryController