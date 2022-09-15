const router = require("express") . Router(); 
const Usuario = require("../Models/Usuario")
const CryptoJS = require("crypto-js");
const { response } = require("express");

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

//Login
router.post("/login", async (req, res) => {
    try{
    const usuario = await Usuario.findOne({nome: req.body.nome});
        !usuario && res.status(401).json("email ou senha incorretos")
    const hashedSenha = CryptoJS.AES.decrypt(usuario.senha, process.env.PASS_SEC);
    const senhaOriginal = hashedSenha.toString(CryptoJS.enc.Utf8);
    senhaOriginal !== req.body.senha && res.status(401).json("credenciais inválidas");

        const { senha, ...others } = usuario._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
    

});

module.exports = router;

