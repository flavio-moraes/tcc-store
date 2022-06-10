const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { requireAuth } = require("../authCheck");



function prepareUser(dbUser) {
    const user = {};
    user.firstname = dbUser.firstname;
    user.lastname = dbUser.lastname;
    user.email = dbUser.email;
    user.role = dbUser.role;
    return user;
};


//Registrar um novo usuário
router.post("/register", async (req, res) => {
    
    //Checar dados da requisição
    const {firstname, lastname, email, password} = req.body;
    if (!firstname || !lastname || !email || !password) {
        console.log("Dados faltando no registro.");
        return res.status(500).json(err);
    }

    //Adicionar a um modelo de usuário os dados da requisição
    const newUser = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
        role: "client"
    });

    //Salvar no BD
    try {
        const savedUser = await newUser.save();
        console.log("savedUser id: ", savedUser.id);
        req.login(savedUser, function(err) {
            if (err) return res.status(500).json(err);
            res.status(201).json(prepareUser(savedUser));
        });
    } catch (err) {
        console.log(err.code);
        res.status(500).json(err);
    }
});


//Obter dados da sessão
router.get("/session", requireAuth, async (req, res) => {  //session
    console.log("init /session");
    console.log(req.user);
    if (req.user) {
        console.log("success /session");
        try {
            const dbUser = await User.findById(req.user.id);
            res.status(200).json({user: prepareUser(dbUser), cart: {}});
        } catch (err) {
            res.status(401).json({success: false, message: err});
        }
    }
    else {        
        console.log("fail /session");
        res.status(401).json({success: false, message: "failure"});
    }
});


//Login local com passport
router.post('/local', passport.authenticate('local'), (req, res) => {
    if (req.user) {
        res.status(200).json(prepareUser(req.user));
    }
    else {
        res.status(500).json({success: false, message: "failure"});
    }
});


//middleware para adicionar o id do socket à sessão, permitindo enviar a informação de volta
const addSocketIdtoSession = (req, res, next) => {
    console.log("query.socketId: ", req.query.socketId);
    req.session.socketId = req.query.socketId;
    next();
};


//Login com google
router.get("/google", addSocketIdtoSession, passport.authenticate("google", {scope: ["email", "profile"]}));

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
    console.log("Resposta do socket", "session.socketId: ", req.session.socketId);
    const io = req.app.get("io");
    io.in(req.session.socketId).emit('google', {user: prepareUser(req.user), cart: {}});
    res.status(200).json({success: true, message: "success"});
});


//Login com facebook
router.get("/facebook", passport.authenticate("facebook", {scope: ["profile"]}));

router.get("/facebook/callback", passport.authenticate("facebook", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed"
}));


//Logout
router.get("/logout", (req, res) => {
    console.log("logout init");
    req.logout();
    console.log("logout end");
    res.redirect(process.env.CLIENT_URL);
});



module.exports = router;


//Não usados
/*

function makeJwtToken(user) {
    return jwt.sign(
        {
            id: user.id,
            isAdmin: user.isAdmin
        },
        process.env.JWT_SEC,
        {expiresIn: eval(process.env.SESSION_EXPIRY)}
    );
};


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

        //Token de acesso fornecido ao cliente após o login para validar suas requisições posteriores
        const accessToken = makeJwtToken(user);

        //Desmembrar o user para retirar o password e mandar na resposta o objeto sem essa informação
        const {password, ...withoutPass} = user._doc;
        //Juntar o withoutPass e o accessToken num objeto e enviar na resposta
        res.status(200).json({...withoutPass, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get("/login/success", async (req, res) => {  //session
    console.log("init /login/success");
    console.log(req.user);
    if (req.user) {
        console.log("success /login/success");
        const dbUser = await User.findById(req.user.id);
        //console.log("findByID: ", user);
        res.status(200).json(prepareUser(dbUser));
    }
    else {        
        console.log("fail /login/success");
        res.status(401).json({success: false, message: "failure"});
    }
});


router.get("/login/failed", (req, res) => {
    console.log("login/failed");
    res.status(401).json({
        success: false,
        message: "failure"
    });
});

//Login com google
router.get("/google", passport.authenticate("google", {scope: ["email", "profile"]}));
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed"
}));



*/