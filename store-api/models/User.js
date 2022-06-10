const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstname: {type: String, required: true},
        lastname: {type: String},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        role: {type: String, required: true, default: "client"}
    },
    {
        timestamps: true
    }
);

/*
//Remover o password da resposta
UserSchema.set("toJSON", {
    transform: function (dot, ret, options) {
        delete ret.password;
        return ret;
    }
});
*/

module.exports = mongoose.model("User", UserSchema);