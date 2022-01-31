const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")

dotenv.config();

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

/*
app.get("/api/v1/test", () => {
    console.log("test foi um sucesso!");
})*/

app.use(express.json());
app.use("/api/v1/users", userRoute);



app.listen(process.env.PORT || 5000, () => {
    console.log("Servidor Backend está rodando.");
})