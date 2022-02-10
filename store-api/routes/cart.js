const router = require("express").Router();
const Cart = require("../models/Cart");
const {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} = require("./verifyToken");


//Criar um carrinho de compra
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
}) 


//Atualizar
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedCart);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


//Deletar
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Carrinho deletado.");
    }
    catch (err) {
        res.status(500).json(err);
    }
});


//Ler um
router.get("/:userId", verifyTokenAndAuth, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


//Ler todos
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;