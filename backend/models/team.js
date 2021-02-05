const mongoose = require('mongoose');
const User = require('./user');

const teamSchema = new mongoose.Schema({
  memberRollNos: [String],
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

teamSchema.virtual('members', {
  ref: 'User',
  localField: 'memberRollNos',
  foreignField: 'rollNo',
  justOne: true,
});

module.exports = mongoose.model('Team', teamSchema);

// teams
// - teamID
// - members [ userID ]
