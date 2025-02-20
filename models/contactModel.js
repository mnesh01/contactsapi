const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, "Add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Add the email address"],
    },
    phone: {
        type: String,
        required: [true, "Add the phone number"],
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema)