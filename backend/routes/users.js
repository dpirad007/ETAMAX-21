var express = require("express");
var router = express.Router();
var passport = require("passport");
var authenticate = require("../authenticate");
require("dotenv").config();

const User = require("../models/user");
var authenticate = require("../authenticate");

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  var jtoken = authenticate.getToken({ _id: req.user._id });

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ success: true, token: jtoken, status: "Login  Successful !" });
});

router.post("/update-profile", authenticate.verifyUser, async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.user._id }, req.body);

    await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        hasFilledProfile: true,
      }
    );
    res.status(200).send({ message: "Profile updated successfully!" });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

//User details
router.get("/me", authenticate.verifyUser, (req, res) => {
  res.send(req.user);
});

module.exports = router;
