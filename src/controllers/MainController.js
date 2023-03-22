const products = require('../database/products.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const MainController = {
  index: (req, res) => {
    res.render('index', {
      products,
      toThousand
    })
  },
  sale: (req, res) => {
    const saleProducts = products.filter(product => product.oferta === true);
    res.render('index', {
      saleproducts: saleProducts, toThousand
    })
  },

  // featured: (req, res) => {
  //   let featuredProducts = products.filter(product => product.destaque === true)
  //   res.render('index', {
  //     products: featuredProducts, toThousand,
  //   })
  // },
  search: (req, res) => {
    let search = req.query.keywords
    let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search))
    res.render('results', {
      products: productsToSearch,
      search,
      toThousand,
    })
  }
}
module.exports = MainController