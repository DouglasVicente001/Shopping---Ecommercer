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
    },
    { timestemps: true }
);

module.exports = mongoose.model("Carrinho", CarrinhoSchema)