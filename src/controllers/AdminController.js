const products = require('../database/products.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const AdminController = {
    showAll: (req, res) => {
        res.render('admin/index', { products: products })
    },
    index: (req, res) => {
        res.render('index', {
            products, toThousand
        })
    },
    // delete: (req, res) => {
    //     const product = products.find(product => product.sku == req.params.sku)
    //     if (product != -1) {
    //         products.splice(product, 1)
    //         return res.status(200).json({ success: 'Produto excluído com sucesso.' }).redirect('/')
    //     }
    //     else return res.status(400).json({ error: 'Produto não encontrado.' })
    // },
    delete: (req, res) => {
    const { sku } = req.params
    
    const productIndex = products.findIndex(product => product.sku == sku)
  
    if (productIndex != -1) {
        products.splice(productIndex, 1)
        res.redirect('/')
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },

    updateForm: (req, res) => {
        let id = req.params.sku
            let productToEdit = products.find(product => product.sku == id)
            res.render('/product-edit-form', { productToEdit })
      },

      updateForm: (req, res) => {
        let id = req.params.id
            let productToEdit = products.find(product => product.id == id)
            res.render('admin/editar', { productToEdit })
      },

      updateProduct: (req, res) => {
        let id = req.params.sku
        let productIndex =  products.find(product => product.sku == id)
        res.json(productIndex)
        if (productIndex != -1) {
            productToEdit = {
                sku: productIndex.sku,
                ...req.body,
            }
            productIndex = productToEdit // atualiza
            res.redirect('/')
        }
        else return res.status(400).json({ error: 'Produto não encontrado.' })
    },
}
module.exports = AdminController