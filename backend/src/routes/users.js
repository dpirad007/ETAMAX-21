
const express=require('express')
const usersRoute=new express.Router()

// GET api/users/
usersRoute.get('/',async(req,res)=>{
    return res.send('hello')
})

module.exports=usersRoute