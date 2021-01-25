const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const bcrypt =require('bcrypt')
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  rollno: {
    type: Number,
    required: true,
    unique:true,
    trim:true,
    minlength:6
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



// - email
// - rollno
// - password
// - criteria { cr1, cr2, cr3... }
// - moneyOwed
// - events [ eventID ]

userSchema.methods.authenticateUser = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString(),email:user.email }, process.env.JWT_SECRET, { expiresIn: '7 days' })
  user.tokens = user.tokens.concat({ token })
  user.save()
  return token
}

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user) {
      throw new Error('No user with this email')
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
      throw new Error('Unable to login')
  }
  return user
}

const User = mongoose.model('User', userSchema)

module.exports =User