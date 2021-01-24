const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  rollno: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
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

module.exports = mongoose.model("User", userSchema);

// - email
// - rollno
// - password
// - criteria { cr1, cr2, cr3... }
// - moneyOwed
// - events [ eventID ]
