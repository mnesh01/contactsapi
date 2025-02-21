const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) =>{
    res.json({message: "Register the user"});
});

//@desc Login a user
//@route POST /api/users/register
//@access public
const loginUser = asyncHandler(async (req, res) =>{
    res.json({message: "login user"});
});

//@desc current user info
//@route GET /api/users/register
//@access private 
const currentUser = asyncHandler(async (req, res) =>{
    res.json({message: "Current user information"});
});


module.exports = { registerUser, loginUser, currentUser };