module.exports = (sequelize, DataType) => {
    const ProdutoCategoria = sequelize.define('ProdutoCategoria', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: DataType.STRING(100)
    }, {
        tableName: 'produto_categoria',
        timestamps: false
    })

    ProdutoCategoria.associate = (modelsList) => {
        ProdutoCategoria.hasMany(modelsList.Produto, {
          foreignKey: 'id_produto_categoria',
          as: 'produto'
        })
      }

    return ProdutoCategoria
}