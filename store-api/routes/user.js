const router = require("express").Router();
const User = require("../models/User");
const {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} = require("./verifyToken");

/*
router.get("/usertest", (req, res) => {
    res.send("user test sucessfull");
});
*/

//Atualizar
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


//Deletar
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Usuário deletado.");
    }
    catch (err) {
        res.status(500).json(err);
    }
});


//Ler um
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...withoutPass} = user._doc;
        res.status(200).json(withoutPass);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


//Ler todos
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


//Obter estatísticas do usuário
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {$project: {
                month: {$month: "$createdAt"}
            }},
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1}
                }
            }
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;