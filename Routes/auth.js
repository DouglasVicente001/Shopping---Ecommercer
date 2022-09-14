const router = require("express") . Router(); 
const Usuario = require("../Models/Usuario")
//Registro

router.post("/registro", async (req, res) =>{
    const novoUsuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.email,
    });
    try{
        const salvandoUsuario = await novoUsuario.save()
        res.status(201).json(salvandoUsuario);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;

