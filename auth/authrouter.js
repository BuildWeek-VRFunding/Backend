const router = require('express').Router();

const Users = require("../database/users-model")
const fund = require('../database/auth-model')
//GET FUNDRAISER BY ID
router.get('/fundraiser/:id', (req, res) => {
    const id = req.params.id;
    fund.findById(id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).json({message: 'could not find fundraiser', err})
        })
})
//GET USER BY ID
router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    Users.findById(id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).json({message: 'could not find fundraiser', err})
        })
})
//GET DONATIONS BY ID
router.get('/donations/:id', (req, res) => {
    const id = req.params.id;
    Users.findById(id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).json({message: 'could not find fundraiser', err})
        })
})
module.exports = router;