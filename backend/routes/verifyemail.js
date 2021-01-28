var express = require('express');
var router = express.Router();
var User=require('../models/user');


router.get('/:email/:token', function(req, res, next) {
    User.findOne({username:req.params.email})
    .then((user)=> {
        if(user.token===req.params.token)
        {
            user.token="";
            user.save();
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json("Email Verified Successfully ! You can Login Now !");
        }
    },(err)=>next(err))
    .catch((err)=>next(err));
  });
  

module.exports = router;