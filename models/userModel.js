const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Add the username"],
    },
    email: {
        type: String,
        required: [true, "Add the username"],
        unique: [true, "Email address alsready taken"]
    },
    password: {
        type: String,
        required: [true, "Add your password"]
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);