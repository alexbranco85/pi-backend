module.exports = (sequelize, DataType) => {
    const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: DataType.STRING(100),
    codname: DataType.STRING(200),
}, {
    timestamps: false,
    tableName: 'produto_categoria'
})

return Categoria

}