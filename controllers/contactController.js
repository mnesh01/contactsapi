//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({message: "Get all contacts"});
};

//@desc  create contacts
//@route GET /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(200).json({message: "Create contact"});
};
//@desc Get contact
//@route GET /api/contact/id
//@access public
const getContact = (req, res) => {
    res.status(200).json({message: `get contact for ${req.params.id}`});
};

//@desc update contact
//@route PUT /api/contact/id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({message: `update contact for ${req.params.id}`});
};

//@desc Delete contact
//@route DELETE /api/contacts
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({message: `delete contact for ${req.params.id}`});
};


module.exports = {getContacts, getContact, createContact, updateContact, deleteContact};
