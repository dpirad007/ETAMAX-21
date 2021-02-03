var express = require('express');
var router = express.Router();
const bodyParser=require('body-parser');
var User=require('../models/user');
var passport=require('passport');
var authenticate=require('../authenticate');
require('dotenv').config()

router.use(bodyParser.json());

router.get('/', authenticate.verifyUser, function(req, res, next) {
  User.find({})
  .then((users)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(users); 
  },(err)=>next(err))
  .catch((err)=>next(err));
});

router.post('/signup',function(req,res,next){

  
  
  User.register(new User({username:req.body.username}),
  req.body.password, (err,user)=>{

    if(err){
      res.statusCode=500;
      res.setHeader('Content-Type','application/json');
      res.json({err:err});
    }
    else{
      if(req.body.name)
        user.name=req.body.name;
      if(req.body.rollno)
        user.rollno=req.body.rollno;
  
      

      user.save((err,user)=>{
        if(err){
          res.statusCode=500;
          res.setHeader('Content-Type','application/json');
          res.json({err:err});
          return;
        }

        // Email

       
        // Email


        passport.authenticate('local')(req,res,()=>{

          res.statusCode=200;
          res.setHeader('Content-Type','application/json');
          res.json({success:true,status:'Registration Successful !'});  
      });
      
      });
    }
  });
 
});

router.post('/login',passport.authenticate('local'),(req,res,next)=>{
  
    var jtoken=authenticate.getToken({_id:req.user._id});
  
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json({success:true, token:jtoken , status:'Login  Successful !'}); 
 
});



router.get('/logout',(req,res,next)=>{
 
});




module.exports = router;
