var express = require("express");
var router = express.Router();
var passport = require("passport");
var authenticate = require("../authenticate");
require("dotenv").config();

//var User = require('../models/user');
var authenticate = require("../authenticate");

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  var jtoken = authenticate.getToken({ _id: req.user._id });

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ success: true, token: jtoken, status: "Login  Successful !" });
});

//Logout done on the client side using JWT
router.get("/logout", (req, res, next) => {});

//user details
router.get("/me", authenticate.verifyUser, (req, res) => {
  res.send(req.user);
});

module.exports = router;
