const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  teamSize: {
    type: Number,
    required: true,
  },
  registered: [
    {
      user1: {
        type: String,
      },
      user2: {
        type: String,
      },
      user3: {
        type: String,
      },
      user4: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Event", eventSchema);

// events
// - eventID
// - times { startTime, endTime }
// - category
// - description
// - seats
// - price
// - teamSize
// - registered [ teamID/userID ]
