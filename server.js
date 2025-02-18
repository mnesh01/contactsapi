const express = require("express")
const dotenv = require("dotenv").config();

const app = express()

const port = process.env.port || 5004;

app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})