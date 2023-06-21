module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        pwd: {
            type: DataType.STRING,
            allowNull: false
        },
        cpf: {
            type: DataType.STRING,
            allowNull: false
        },
        telefone: {
            type: DataType.STRING,
            allowNull: false
        },
        is_admin: {
            type: DataType.STRING,
            allowNull: false
        },
    }, {
        tableName: 'usuario',
        timestamps: false
    })

    Usuario.associate = (modelsList) => {
        Usuario.hasMany(modelsList.Pedido, {
            foreignKey: 'id',
            as: 'pedido'
        })

        Usuario.hasMany(modelsList.Endereco, {
            foreignKey: 'id_endereco',
            as: 'endereco'
        })

    }
    return Usuario
}