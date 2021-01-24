const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  teamId: {
    type: String,
    required: true,
  },
  members: [
    {
      type: String,
      required: true,
    },
  ]
});

module.exports = mongoose.model("Team", teamSchema);

// teams
// - teamID
// - members [ userID ]
