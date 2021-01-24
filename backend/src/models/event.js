const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  // eventId: {
  //   type: String,
  //   required: true,
  // },
  // eventTime: {
  //   // Event's start time and end time
  //   required: true,
  // },
  // category: {
  //   type: String,
  //   required: true,
  // },
  // description: {
  //   type: String,
  //   required: true,
  // },
  // seats: {
  //   type: Number,
  //   required: true,
  // },
  // price: {
  //   type: Number,
  //   required: true,
  // },
  // teamSize: {
  //   type: Number,
  //   required: true,
  // },
  // registered: {
  //   // teamId / userId
  // },
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
