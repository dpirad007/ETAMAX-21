var express = require('express');
var router = express.Router();
var passport = require('passport');
require('dotenv').config()


var User = require('../models/user');
var authenticate = require('../authenticate');

router.get('/', authenticate.verifyUser, async (req, res) => {
  try {
    let users = await User.find({})
    res.send(users)
  } catch (e) {
    res.status(400).send(e)
  } 
});

//This route WILL NOT be used in the final app. Only for testing api 
router.post('/add-user', async (req, res) => {
  let user = new User(req.body)

  try {
    await User.register(user, req.body.password);

    passport.authenticate('local')(req, res, () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ success: true, status: 'Registration Successful !' });
    });
  } catch (e) {
    res.status(500).send(e)
  }

});


router.post('/login', passport.authenticate('local'), (req, res, next) => {

  var jtoken = authenticate.getToken({ _id: req.user._id });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ success: true, token: jtoken, status: 'Login  Successful !' });

});

//Logout done on the client side using JWT
router.get('/logout', (req, res, next) => {

});

module.exports = router;
