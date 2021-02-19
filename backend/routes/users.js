var express = require("express");
var router = express.Router();
var passport = require("passport");
var authenticate = require("../authenticate");
require("dotenv").config();

const User = require("../models/user");
var authenticate = require("../authenticate");

//URL - /api/users/login
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  var jtoken = authenticate.getToken({ _id: req.user._id });

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    name: req.user.name,
    success: true,
    token: jtoken,
    status: "Login  Successful !",
  });
});

//URL - /api/users/update-profile 👨‍💻
router.post("/update-profile", authenticate.verifyUser, async (req, res) => {
  try {
    // Check if the update is allowed on given fields
    const allowedFields = ["name", "semester", "collegeName", "phoneNumber"];
    let isValidObject = Object.keys(req.body).every((field) => {
      return allowedFields.includes(field);
    });
    if (!isValidObject) {
      return res.status(400).send({ message: "Update not allowed for such fields" });
    }
    // find and update current user data
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { ...req.body, hasFilledProfile: true },
      { runValidators: true }
    );
    return res.status(200).send({ message: "Profile updated successfully!" });
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

///URL - /api/users/details
router.get("/details", authenticate.verifyUser, (req, res) => {
  return res.status(200).send(req.user.hasFilledProfile);
});

//URL - /api/users/profile-details
router.get("/profile-details", authenticate.verifyUser, async (req, res) => {
  try {
    return res.status(200).send({
      criteria: req.user.criteria,
      moneyOwed: req.user.moneyOwed,
      hasFilledProfile: req.user.hasFilledProfile,
      moneyOwed: req.user.moneyOwed,
      rollNo: req.user.rollNo,
      name: req.user.name
    });
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
});

module.exports = router;
