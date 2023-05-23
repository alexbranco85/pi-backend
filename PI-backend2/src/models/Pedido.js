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

    Pedido.associate = (modelsList) => {
        Pedido.belongsTo(modelsList.Usuario, {
          foreignKey: 'id_usuario',
          as: 'usuario'
        })
        Pedido.belongsToMany(modelsList.Produto, {
          foreignKey: 'id_produto',
          as: 'pedidoItem',
          through: modelsList.PedidoItem
        })
      }

    return Pedido
}