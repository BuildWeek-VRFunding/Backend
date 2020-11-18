const express = require("express");
const jwt = require('jsonwebtoken');
require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const authrouter = require("../auth/authrouter.js");
const bcrypt = require('bcryptjs');

const users = require('../database/dbmodel')
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.post('/register', async (req, res) => {
    try{
      const {username, password, name,fundraiser } = req.body
      const hash =bcrypt.hashSync(password,10)
      const user = {username, password:hash, name, fundraiser}
      const addedUser = await Users.add(user)
      res.json(addedUser)
    }
    catch(err){
      res.status(500).json({ message:err.message})
    }
  });
  server.post('/login', async (req, res) => {
    try{
      const [user] = await Users.findBy({username:req.body.username})
      if( user && bcrypt.compareSync(req.body.password, user.password)){
        const token = makeToken(user);
        res.json({ message: `welcome back ${user.username}`, token})
      } else {
        res.status(401).json({message:'bad credentials'})
      }
    } catch (err){
      res.status(500).json({message: err.message})
    }
  });


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