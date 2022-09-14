const mongoose = require("mongoose");


const CarrinhoSchema = new mongoose.Schema(
    {
        usuarioId: { type: String, required: true },
        produtos: [
            {
                produtoId: {
                    type: String
                },
                quantidade: {
                    type: Number,
                    default: 1,
                }
            }
        ],
        amount: {type: Number , required: true},
        endereco: {type: Object, required: true},
        status: {type: String, default: "pendente"}
    },
    { timestemps: true }
);

module.exports = mongoose.model("Carrinho", CarrinhoSchema)