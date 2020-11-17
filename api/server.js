const express = require("express");
const jwt = require('jsonwebtoken');
require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const authrouter = require("../auth/authrouter.js");


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authrouter);


function makeToken(user){
    const payload = {
        subject:user.id,
        username:user.username
    }
    const options = {
        expiresIn: '5 days'
    }
    return jwt.sign(payload, process.env.secret, options);
}
module.exports = server;