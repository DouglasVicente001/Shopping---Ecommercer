const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const usuarioRoute = require("./Routes/usuario");
const authRoute = require("./Routes/auth");
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log("ConexaoDB bem sucedida!"))
.catch((err)=> {console.log(err)});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use(express.json(), usuarioRoute);

app.listen(process.env.PORT || 5000, ()=> {
    console.log("O beckend está funcionando! e está rodando na porta 5000.")
})

