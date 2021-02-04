var express = require('express');
var router = express.Router();
var passport = require('passport');
require('dotenv').config()

const User = require('../models/user')
var authenticate = require('../authenticate');

router.post('/login', passport.authenticate('local'), (req, res) => {

  var jtoken = authenticate.getToken({ _id: req.user._id });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ success: true, token: jtoken, status: 'Login  Successful !' });

});

router.post('/update-profile', authenticate.verifyUser, async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.user._id }, req.body)

    await User.findOneAndUpdate({ _id: req.user._id }, {
      hasFilledProfile: true
    })
    res.status(200).send({ message: 'Profile updated successfully!' })
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
})

//Logout done on the client side using JWT
router.get('/logout', (req, res, next) => {

});

module.exports = router;
