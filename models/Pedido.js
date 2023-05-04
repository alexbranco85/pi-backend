module.exports = (sequelize, DataType) => {
    const Pedido = sequelize.define('Pedido', {
        id_pedido: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: DataType.INTEGER,
        total: DataType.DECIMAL(10, 2),
        entrega: DataType.DATE,
        id_usuario: {
            type: DataType.INTEGER,
            foreignKey: true
        } 
    }, {
        tableName: 'pedido',
        timestamps: false
    })
}