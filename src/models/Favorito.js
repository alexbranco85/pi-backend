module.exports = (sequelize, DataType) => {
    const Favorito = sequelize.define('Favorito', {
        id_favorito: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        id_usuario: {
            type: DataType.INTEGER,
            foreignKey: true
        },

        id_produto: {
            type: DataType.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'favorito',
        timestamps: false
    })

    return Favorito
}