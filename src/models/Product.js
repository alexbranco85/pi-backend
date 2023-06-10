module.exports = (sequelize, DataType) => {
    const Product = sequelize.define('Product', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sku: DataType.STRING(45),
    marca: DataType.STRING(45),
    nome: DataType.STRING(100),
    imagemDestaque: DataType.STRING(100),
    imagens: DataType.STRING(150),
    cores: DataType.STRING(45),
    valor: DataType.DECIMAL(10, 2),
    desconto: DataType.DECIMAL(10,2),
    descricao: DataType.STRING(400),
    tamanhos: DataType.STRING(400),
    destaque: DataType.INTEGER,
    oferta: DataType.INTEGER,
    id_produto_categoria: {
        type: DataType.INTEGER,
        foreignKey: true
    }
}, {
    timestamps: false,
    tableName: 'produto'
})

Product.associate = (modelsList) => {
  Product.belongsTo(modelsList.ProdutoCategoria, {
      foreignKey: 'id_produto_categoria',
      as: 'produtoCategoria'
    })
    Product.belongsToMany(modelsList.Pedido, {
      foreignKey: 'id_pedido',
      as: 'pedido',
      through: modelsList.PedidoItem
    })
  }
return Product
}