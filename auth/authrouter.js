const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require("../database/dbmodel")

router.post('/register', async (req, res) => {
    try{
      const {username, password, name, description,fundraiser } = req.body
      const hash =bcrypt.hashSync(password,10)
      const user = {username, password:hash, name, description, fundraiser}
      const addedUser = await Users.add(user)
      res.json(addedUser)
    }
    catch(err){
      res.status(500).json({ message:err.message})
    }
  });
  module.exports = router;