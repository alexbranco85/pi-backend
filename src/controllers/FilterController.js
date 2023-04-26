const products = require('../database/products.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const filterController = {
  filter: (req, res) => {
    const { minPrice, maxPrice, marca, type, size } = req.body;
    let filteredProducts = products.filter((product) => {
      let isBrandMatch = marca ? product.marca === marca : true;
      // let isTypeMatch = type ? product.type === type : true;
      // let isSizeMatch = size ? product.sizes.includes(size) : true;
      // let isPriceMatch =
      //   minPrice && maxPrice
      //     ? product.price >= minPrice && product.price <= maxPrice
      //     : true;
      return isBrandMatch
      //  && isTypeMatch && isSizeMatch && isPriceMatch;
    });
    res.render('todos', { products: filteredProducts });
  },
}
module.exports = filterController