module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id_usuario: {
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
        senha: {
            type: DataType.STRING,
            allowNull: false
        },
        cpf: {
            type: DataType.STRING,
            allowNull: false
        },
        rg: {
            type: DataType.STRING,
            allowNull: false
        }

    }, {
        tableName: 'usuario',
        timestamps: false
    })
}