module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('Produto', {
    id_produto: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sku: DataType.STRING(45),
    marca: DataType.STRING(45),
    nome: DataType.STRING(100),
    imagemDestaque: DataType.STRING(100),
    imagen: DataType.STRING(150),
    cor: DataType.STRING(45),
    valor: DataType.DECIMAL(10, 2),
    desconto: DataType.DECIMAL(10,2),
    descricao: DataType.STRING,
    tamanho: DataType.INTEGER,
    destaque: DataType.BOOLEAN,
    oferta: DataType.BOOLEAN,
    id_produto_categoria: {
        type: DataType.INTEGER,
        foreignKey: true
    }
}, {
    timestamps: false,
    tableName: 'produto'
})

return Produto

}