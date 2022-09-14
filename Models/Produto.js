const mongoose = require("mongoose");


const ProdutoSchema = new mongoose.Schema(
    {
        titulo: {type:String , required:true, unique:true},
        descricao:{type: String , required:true},
        img: {type: String , required: true},
        categorias: {type: Array},
        tamanho: {type: String},
        cor: {type: String},
        preco: {type: Number , required: true},
    },
    {timestemps:true}
);

module.exports = mongoose.model("Produto", ProdutoSchema)