const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
var session = require('express-session');
const { Server } = require('socket.io');
const { createServer } = require('http');

dotenv.config();
const passportSetup = require("./passportSetup");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const bodyParser = require("body-parser");


/*
const user = "admin";
const pass = "123456abc";
const serverName = "cluster0.oc7ni.mongodb.net";
const database = "tcc_store";
mongoose.connect(
    `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
)*/

mongoose.connect(process.env.MONGO_URL)
.then((res) => console.log(`Conexão ao BD bem sucedida. ${res}`))
.catch((err) => console.log(`Falha na conexão com o BD. ${err}`));

//app.use(bodyParser.json());
//app.use(cookieParser(process.env.COOKIE_SECRET));

//permitir enviar sessões por meio das requisições client server
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
/*app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});*/
app.use(express.json());

/*
app.get("/api/v1/test", () => {
    console.log("test foi um sucesso!");
})*/


/*
Login, autenticação e persistência
*/
/*app.use(cookieSession({
    name: "session",
    keys: ["tccstore"],
    maxAge: 24*60*60*1000 //um dia
}));*/

app.use(session({
    secret: process.env.SESSION_SEC,
    resave: false,
    saveUninitialized: true,
  }));
//app.use(passport.authenticate('session'));
app.use(passport.initialize());
app.use(passport.session());

//conectar sockets ao servidor
const server = createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true
    }
});
app.set('io', io);
io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("disconnect", (reason) => {
        console.log("Socket diconnect reason: ", reason);
    });
});



app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/carts", cartRoute);
app.use("/api/v1/orders", orderRoute);


/*app.listen(process.env.PORT || 5000, () => {
    console.log("Servidor Backend está rodando.");
});*/
server.listen(process.env.PORT || 5000, () => {
    console.log("Servidor Backend está rodando.");
});