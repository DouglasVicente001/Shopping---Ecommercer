const router = require("express") . Router(); 
const Usuario = require("../Models/Usuario")
const CryptoJS = require("crypto-js")
//Registro

router.post("/registro", async (req, res) =>{
    const novoUsuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: CryptoJS.AES.encrypt(
            req.body.senha, 
            process.env.PASS_SEC
            ).toString(),
    });
    try{
        const salvandoUsuario = await novoUsuario.save()
        res.status(201).json(salvandoUsuario);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;

