module.exports = (sequelize, DataType) => {
    const ProdutoCategoria = sequelize.define('ProdutoCategoria', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncremente: true,
        },
        nome: DataType.STRING(100)
    }, {
        tableName: 'produto_categoria',
        timestamps: false
    })
}