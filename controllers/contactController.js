const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id});
    res.status(200).json(contacts);
});

//@desc  create contacts
//@route POST /api/contacts
//@access private
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
        user_id: req.user.id
    });

    res.status(200).json(contact);
});
//@desc Get contact
//@route GET /api/contact/id
//@access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);
});

//@desc update contact
//@route PUT /api/contact/id
//@access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        req.status(404);
        throw new Error("Contact not found")
    }
    if (contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User doesn't have permission to update other contacts")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts
//@access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        req.status(404);
        throw new Error("Contact not found")
    }

    if (contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User doesn't have permission to delete other contacts")
    }
     await Contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact);
});


module.exports = {getContacts, getContact, createContact, updateContact, deleteContact};
