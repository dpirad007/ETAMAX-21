const express = require('express')
const usersRoute = new express.Router()
const User = require('../models/user');


// GET api/users/
usersRoute.get('/', async(req,res)=>{
    try{
        const user = await User.find();
        res.send(user);
    }catch(err){
        res.status(500).send({message: err.message});
    }
})

// POST api/users/
usersRoute.post('/', async(req,res)=>{
    const user = new User({
        email: req.body.email,
        rollno: req.body.rollno,
        password: req.body.password,
    })
    try{
        const newUser = await user.save();
        res.status(201).send({message: "User stored successfully"});
    }catch(err){
        res.status(400).send({message: err.message});
    }
})

module.exports = usersRoute;