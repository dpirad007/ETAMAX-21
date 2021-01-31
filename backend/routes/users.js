var express = require('express');
var router = express.Router();
const bodyParser=require('body-parser');
var User=require('../models/user');
var passport=require('passport');
var authenticate=require('../authenticate');
require('dotenv').config()

router.use(bodyParser.json());

var crypto = require("crypto");

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


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

  
  var token = crypto.randomBytes(20).toString('hex');

  User.register(new User({username:req.body.username}),
  req.body.password, (err,user)=>{

    if(err){
      res.statusCode=500;
      res.setHeader('Content-Type','application/json');
      res.json({err:err});
    }
    else{
      if(req.body.firstname)
        user.firstname=req.body.firstname;
      if(req.body.lastname)
        user.lastname=req.body.lastname;
  
      user.token=token;

      user.save((err,user)=>{
        if(err){
          res.statusCode=500;
          res.setHeader('Content-Type','application/json');
          res.json({err:err});
          return;
        }

        // Email

        const msg = {
          to: req.body.username, // Change to your recipient
          from: 'prithvirajpatil2511@gmail.com', // Change to your verified sender
          subject: 'ETAMAX AUTHENTICATION EMAIL!!',
          text: 'Please click on the following link to verify your email!!',
          html: '<strong>Please click on the following link to verify your email!!</strong><a href="http://localhost:5000/api/verifyemail/'+req.body.username+'/'+token+'">Click Here!!</a>',
        }

        sgMail.send(msg).then(() => {
          console.log('emails sent successfully!');
        }).catch(error => {
          console.log(error);
        });
        // Email


        passport.authenticate('local')(req,res,()=>{

          res.statusCode=200;
          res.setHeader('Content-Type','application/json');
          res.json({success:true,status:'Registration Successful ! Please verify your Email to continue!'});  
      });
      
      });
    }
  });
 
});

router.post('/login',passport.authenticate('local'),(req,res,next)=>{
  if(req.user.token===""){
    var jtoken=authenticate.getToken({_id:req.user._id});
  
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json({success:true, token:jtoken , status:'Login  Successful !'}); 
  }
   
  else{
    res.statusCode=401;
    res.setHeader('Content-Type','application/json');
    res.json({status:'Email not verified!'}); 
  }
  
});



router.get('/logout',(req,res,next)=>{
 
});




module.exports = router;
