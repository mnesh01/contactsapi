const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc  create contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request of the body is :", req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone ) {
        res.status(400);
        throw new Error("Fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });

    res.status(200).json(contact);
});
//@desc Get contact
//@route GET /api/contact/id
//@access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `get contact for ${req.params.id}`});
});

//@desc update contact
//@route PUT /api/contact/id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update contact for ${req.params.id}`});
});

//@desc Delete contact
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete contact for ${req.params.id}`});
});


module.exports = {getContacts, getContact, createContact, updateContact, deleteContact};
