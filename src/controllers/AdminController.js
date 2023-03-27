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
    delete: (req, res) => {
        const product = products.find(product => product.sku == req.params.sku)
        if (product != -1) {
            products.splice(product, 1)
            return res.status(200).json({ success: 'Produto excluído com sucesso.' })
        }
        else return res.status(400).json({ error: 'Produto não encontrado.' })
    },
    update: (req, res) => {
        
    }
}
module.exports = AdminController