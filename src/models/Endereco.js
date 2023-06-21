const Usuario = require("./Usuario")

module.exports = (sequelize, DataType) => {
    const Endereco = sequelize.define('Endereco', {
        id_endereco: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cep: {
            type: DataType.STRING,
            allowNull: false
        },
        numero: {
            type: DataType.STRING,
            allowNull: false
        },
        bairro: {
            type: DataType.STRING,
            allowNull: false
        },
        cidade: {
            type: DataType.STRING,
            allowNull: false
        },
        estado: {
            type: DataType.STRING,
            allowNull: false
        },

        logradouro: {
            type: DataType.STRING,
            allowNull: false
        },

        complemento: {
            type: DataType.STRING,
            allowNull: false
        },

        id_usuario: {
            type: DataType.INTEGER,
            foreignKey: true
        }

    }, {
        tableName: 'endereco',
        timestamps: false
    })

    Endereco.associate = (modelsList) => {
        Endereco.belongsTo(modelsList.Usuario, {
            foreignKey: 'id_usuario',
            as: 'usuario'
        })
    }
    

    return Endereco
}