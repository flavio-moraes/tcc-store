const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Registrar um novo usuário
router.post("/register", async (req, res) => {
    //Adicionar a um modelo de usuário os dados da requisição
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });

    //Salvar no BD
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }

});


//Fazer o login de um usuário
router.post("/login", async (req, res) => {
    try {
        //Buscar no model User o usuário da requisição
        const user = await User.findOne({username: req.body.username});
        //Se usuário não for encontrado
        if (!user) {
            res.status(401).json("Usuário ou senha incorretos.");
            return;
        }

        //Comparar se a senha fornecida está correta
        const storedPass = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8);
        if (storedPass !== req.body.password) {
            res.status(401).json("Usuário ou senha incorretos.");
            return;
        }

        //Token de acesso fornecido ao cliente após o login para verificar se as requisições pertencem a ele
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SEC,
            {expiresIn: "3d"}
        );

        //Desmembrar o user para retirar o password e mandar na resposta o objeto sem essa informação
        const {password, ...withoutPass} = user._doc;
        //Juntar o withoutPass e o accessToken num objeto e enviar na resposta
        res.status(200).json({...withoutPass, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;