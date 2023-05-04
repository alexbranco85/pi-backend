module.exports = (sequelize, DataType) => {
    const PedidoItem = sequelize.define('PedidoItem', {
        id_pedido: {
            type: DataType.INTEGER,
            foreignKey: true
        },
        id_produto: {
            type: DataType.INTEGER,
            foreignKey: true
        },
        quantidade: DataType.INTEGER 
    }, {
        tableName: 'pedido_item',
        timestamps: false
    })
}