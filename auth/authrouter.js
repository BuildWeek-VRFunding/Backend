const router = require('express').Router();

const Users = require("../database/users-model")
const fund = require('../database/auth-model')
//CREATE FUNDRAISER
router.post('/fundraiseradd', (req, res) => {
    const { id } = req.params;
    const recipe = req.body;
    console.log(recipe);
 
    Recipes.add(recipe)
       .then(data => {
          res.status(201).json(data);
       })
       .catch(err => {
          console.log(err)
          res.status(500).json({ message: 'fail to create new fundraiser' })
       })
 })
//CREATE DONATION
router.post('/donationadd/:id', (req, res) => {
    const donation = req.body;
    console.log(donation);
 
    fund.adddonation(donation)
       .then(data => {
          res.status(201).json(data);
       })
       .catch(err => {
          console.log(err)
          res.status(500).json({ message: 'fail to add donation' })
       })
 })
//PUT FUNDRAISER BY ID 
router.put('/fundraiseredit/:id', (req, res)=> {
    const id =req.params.id;
    const changes = req.body;
    fund.update(id, changes)
        .then(data =>{
            res.json(data)
        })
        .catch(err => {
            res.status(404).json({message: 'could not update fundraiser', err})
        })

})

//DELETE FUNDRAISER BY ID
router.delete('./fundraiserdel/:id', (req,res) => {
    const id = req.params.id;
    fund.remove(id)
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.status(404).json({message: 'could not delete fundraiser', err})
    })

})
router.get('/fundraiserall/:id', (req, res) => {
    const id = req.params.id;
    fund.getfundraiser(id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).json({message: 'could not find fundraiser', err})
        })
})

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
router.get('/donationtotal/:id', (req, res) => {
    const id = req.params.id;
    fund.getDonationTotalByID(id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).json({message: 'could not find fundraiser', err})
        })
})
router.get('/donatedtotal/:id', (req, res) => {
    const id = req.params.id;
    fund.findDonationByID(id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).json({message: 'could not find fundraiser', err})
        })
})
module.exports = router;