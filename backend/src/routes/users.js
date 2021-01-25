const express = require("express");
const usersRoute = new express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const auth=require('../middleware/auth')


// GET api/users/
usersRoute.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// POST api/users/
usersRoute.post("/", async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    email: req.body.email,
    rollno: req.body.rollno,
    password: hashedPassword,
  });
  try {
    const newUser = await user.save();
    token = await user.authenticateUser();
    res.status(201).send({ newUser,token});
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// POST api/users/login 
usersRoute.post('/login',async(req,res)=>{
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.authenticateUser();
    res.send({ user, token })
  } catch (error) {
    res.status(400).send({error: error.message})
  }
})

module.exports = usersRoute;
