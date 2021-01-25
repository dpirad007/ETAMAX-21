const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    },
  },
  rollno: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    minlength: 6,
    validate(value) {
      const re = /^\d{6,7}$/g;
      if (!re.test(String(value))) {
        throw new Error("Rollno is not valid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
  },
  criteria: {
    crit1: { type: Boolean, default: false },
    crit2: { type: Boolean, default: false },
    crit3: { type: Boolean, default: false },
  },
  moneyOwed: {
    type: Boolean,
  },
  events: [
    {
      type: String,
    },
  ],
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "yomama", {
    expiresIn: "1 days",
  });
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

module.exports = mongoose.model("User", userSchema);

// - email
// - rollno
// - password
// - criteria { cr1, cr2, cr3... }
// - moneyOwed
// - events [ eventID ]
