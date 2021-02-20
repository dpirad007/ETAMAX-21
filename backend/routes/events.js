const url = require("url");

var express = require("express");
var router = express.Router();
require("dotenv").config();

var Event = require("../models/event");
var User = require("../models/user");
var Team = require("../models/team");
var authenticate = require("../authenticate");

const include_list = [
  'MWALKERS',
  'CDUETDANCE',
  'CSOLOSINGING1',
  'CDUETSINGING1',
  'CMONOACTING1',
  'CSHORTFILM1',
  'CMASTERCHEF2',
  'THACKATHON1',
  'TIDEATHON1',
  'TCODEOQUICK',
  'TPOSTERPRESENTATION3',
  'TPAPERPRESENTATION2',
  'TCADMASTER2',
  'SVALORANT123',
  'SCSGO',
  'SRKTLEAGUE22',
  'SRKTLEAGUE33',
  'SAMONGUS3',
  'SCODMOBILE'
]

//URL: /api/events?day=n&category='C/T/F'
router.get("/", authenticate.verifyUser, async (req, res) => {
  const urlObj = url.parse(req.originalUrl, true);
  try {
    let events = await Event.find({
      $and: [{ day: urlObj.query.day }, { category: urlObj.query.category }],
    });
    if (req.user.rollNo[0] === '9') {
      events = events.filter((event) => {
        return include_list.includes(event.eventCode)
      })
    }
    res.send(events);
  } catch (e) {
    res.status(401).send({ error: e.message });
  }
});

// URL: /api/events/my-events'
router.get("/my-events", authenticate.verifyUser, async (req, res) => {
  try {
    await User.findById(req.user._id)
      .populate("events", {
        registered: 0,
        eventCode: 0,
        isSeminar: 0,
      })
      .lean()
      .exec(async (err, user) => {
        if (err) {
          throw new Error("Somithing went wrong");
        }
        let myevents = [];

        for (let i = 0; i < user.events.length; i++) {
          let teamMembers = [];

          for (let j = 0; j < user.eventTeams.length; j++) {
            if (
              String(user.eventTeams[j].eventid) == String(user.events[i]._id)
            ) {
              const particularTeam = await Team.findById(
                user.eventTeams[j].teamid
              );
              if (!particularTeam) break;
              for (let k = 0; k < particularTeam.memberRollNos.length; k++) {
                const particularUser = await User.findOne({
                  rollNo: particularTeam.memberRollNos[k],
                });
                teamMembers.push(particularUser.rollNo);
              }
              break;
            }
          }
          user.events[i] = { ...user.events[i], teamMembers: teamMembers };
        }

        return res.status(200).send(user.events);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

// //URL: /api/events/my-status
// router.get('/my-status', authenticate.verifyUser, async (req, res) => {
//     try {
//         let crit = await User.findOne({ _id: req.user._id }, { criteria: 1, moneyOwed: 1 })
//         let paid = Object.values(crit.criteria).every(v => v) && moneyOwed === 0
//         res.status(200).send([crit, { paid }])
//     } catch (e) {

//     }
// })

//URL: /api/events/register-event
/*
Request Body - 
Individual Event - {
    eventCode
} 

Team Event - {
    eventCode,
    teamName,
    member1,
    .
    .
    .
    memberN
}
*/
router.post("/register-event", authenticate.verifyUser, async (req, res) => {
  try {
    let event = await Event.findOne({ eventCode: req.body.eventCode });
    //Does the event have seats left?
    if (event.maxSeats - event.seats === 0) {
      return res.status(400).send({ message: "This event has no seats left!" });
    }
    if (event.teamSize === 1) {
      //Has the user already registered for this event?
      if (req.user.events.includes(event._id)) {
        return res
          .status(400)
          .send({ message: "You have already registered for this event!" });
      }

      //Update User: Update criteria, increase moneyOwed and push event id into events array
      let user_update = {
        $set: {},
        $inc: { moneyOwed: event.entryFee },
        $push: { events: event._id },
      };
      user_update.$set["criteria." + event.day] = true;
      user_update.$set["criteria." + event.category] = true;
      await User.findOneAndUpdate({ _id: req.user._id }, user_update);

      //Update Event: increment seat and push user id into registered
      let event_update = {
        $inc: { seats: 1 },
        $push: { registered: req.user._id },
      };
      await Event.findOneAndUpdate(
        { eventCode: req.body.eventCode },
        event_update
      );

      res.status(201).send({ message: "Criteria and Seats updated!" });
    } else {
      //Has the current user (leader) already registered for this event?
      if (req.user.events.includes(event._id)) {
        return res
          .status(400)
          .send({ message: "You have already registered for this event!" });
      }

      //Make an array of all team member Roll Numbers
      let team = Object.keys(req.body)
        .filter((key) => key !== "eventCode" && key !== "teamName")
        .map((key) => {
          return req.body[key];
        });

      team.unshift(req.user.rollNo);

      //Is the team size correct?
      if (event.isTeamSizeStrict && team.length !== event.teamSize) {
        return res.status(400).send({
          message:
            "This event has a strict team size! Please add more members!",
        });
      }

      //Are any of the input roll numbers duplicates?
      if (hasDuplicates(team)) {
        return res.status(400).send({
          message:
            "Team members have been repeated! Please ensure they are unique!",
        });
      }

      for (let i = 0; i < team.length; i++) {
        let user_events = await User.findOne(
          { rollNo: team[i] },
          { events: 1 }
        );

        //Do any of the entered roll numbers not exist
        if (!user_events) {
          return res.status(400).send({
            message: "The entered roll number(s) are invalid or do not exist!",
          });
        }

        //If the entered roll no. is external do they have acces to event?
        if (team[i][0] === '9') {
          if(!include_list.includes(event.eventCode)){
            return res.status(400).send({
              message: "You may not add non FCRIT students for this event!",
            });
          }
        }

        //Have any of the members in the input already registered for this event?
        if (user_events.events.includes(event._id)) {
          return res.status(400).send({
            message:
              "Your team member(s) have already registered for this event!",
          });
        }
      }

      //Create a new team
      let new_team = new Team({
        teamName: req.body.teamName,
        memberRollNos: team,
      });

      new_team = await new_team.save();

      //Update Event : increment seat and push team id into registered
      let event_update = {
        $inc: { seats: 1 },
        $push: { registered: new_team._id },
      };
      await Event.findOneAndUpdate(
        { eventCode: req.body.eventCode },
        event_update
      );

      //Increase the current user's (leader's) moneyOwed
      await User.findOneAndUpdate(
        { _id: req.user._id },
        { $inc: { moneyOwed: event.entryFee } }
      );

      //Update the criteria and event array for all the team members
      let user_update = {
        $set: {},
        $push: {
          events: event._id,
          eventTeams: { eventid: event._id, teamid: new_team._id },
        },
      };
      user_update.$set["criteria." + event.day] = true;
      user_update.$set["criteria." + event.category] = true;

      for (let i = 0; i < team.length; i++) {
        await User.findOneAndUpdate({ rollNo: team[i] }, user_update);
      }

      res.status(200).send({ message: "Criteria and Seats updated!" });
    }
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

let hasDuplicates = (array) => {
  return new Set(array).size !== array.length;
};

module.exports = router;
