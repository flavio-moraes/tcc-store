const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")

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
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/carts", cartRoute);
app.use("/api/v1/orders", orderRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Servidor Backend está rodando.");
})