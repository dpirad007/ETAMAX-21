const url = require('url')

var express = require('express');
var router = express.Router();
require('dotenv').config()

var Event = require('../models/event');
var User = require('../models/user');
var Team = require('../models/team');
var authenticate = require('../authenticate');

//URL: /api/events?day=n&category='C/T/F'
router.get('/', async (req, res) => {
    const urlObj = url.parse(req.originalUrl, true)
    try {
        let events = await Event.find({
            $and: [
                { day: urlObj.query.day },
                { category: urlObj.query.category }
            ]
        })
        res.send(events)
    } catch (e) {
        res.status(401).send({error:e.message})
    }
})

// URL: /api/events/my-events'
router.get('/my-events', authenticate.verifyUser, async (req, res) => {
    const urlObj = url.parse(req.originalUrl, true)
    try {
        await User.findById(req.user._id).populate('events',{
            registered:0,
            eventCode:0,
            isSeminar:0,
        }).exec((err, user) => {
            if(err){
                throw new Error('Somithing went wrong') 
            }
            return res.status(200).send(user.events)
        })
        
    } catch (e) {
        res.status(400).send({error:e.message})
    }
    
})

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
router.post('/register-event', authenticate.verifyUser, async (req, res) => {
    try {
        let event = await Event.findOne({ eventCode: req.body.eventCode })
        //Does the event have seats left?
        if (event.maxSeats - event.seats === 0) {
            return res.status(400).send([{ 'message': 'This event has no seats left!' }])
        }
        if (event.teamSize === 1) {
            //Has the user already registered for this event?
            if (req.user.events.includes(event._id)) {
                return res.status(400).send([{ 'message': 'You have already registered for event!' }])
            }

            //Update User: Update criteria, increase moneyOwed and push event id into events array
            let user_update = {
                $set: {},
                $inc: { moneyOwed: event.entryFee },
                $push: { events: event._id }
            }
            user_update.$set['criteria.' + event.day] = true
            user_update.$set['criteria.' + event.category] = true
            await User.findOneAndUpdate({ _id: req.user._id }, user_update)

            //Update Event: increment seat and push user id into registered
            let event_update = {
                $inc: { seats: 1 },
                $push: { registered: req.user._id }
            }
            await Event.findOneAndUpdate({ eventCode: req.body.eventCode }, event_update)

            res.status(201).send([{ 'message': 'Criteria and Seats updated!' }])

        } else {
            //Has the current user (leader) already registered for this event?
            if (req.user.events.includes(event._id)) {
                return res.status(400).send([{ 'message': 'You have already registered for event!' }])
            }

            //Make an array of all team member Roll Numbers
            req.body['leader'] = req.user.rollNo
            let team = Object.keys(req.body).filter((key) => key !== 'eventCode' && key !== 'teamName'
            ).map((key) => {
                return req.body[key]
            })

            //Is the team size correct?
            if (event.isTeamSizeStrict && team.length !== event.teamSize) {
                return res.status(400).send([{ 'message': 'This event has a strict team size! Please add more members!' }])
            }

            //Are any of the input roll numbers duplicates?
            if (hasDuplicates(team)) {
                return res.status(400).send([{ 'message': 'Team members have been repeated! Please ensure they are unique!' }])
            }

            //Have any of the members in the input already registered for this event?
            let already_registered = [], invalid_roll = []
            for (let i = 0; i < team.length; i++) {
                let user_events = await User.findOne({ rollNo: team[i] }, { events: 1 })
                if(!user_events) {
                    invalid_roll.push(team[i])
                    continue
                }
                
                if (user_events.events.includes(event._id)) {
                    already_registered.push(team[i])
                }
            }

            if (already_registered.length !== 0) {
                return res.status(400).send([{ 'message': 'Your team member(s) have already registered for this event!' }, already_registered])
            }

            if (invalid_roll.length !== 0) {
                return res.status(400).send([{ 'message': 'The following roll number(s) are invalid or do not exist!' }, invalid_roll])
            }

            //Create a new team
            let new_team = new Team({
                teamName: req.body.teamName,
                memberRollNos: team
            })

            new_team = await new_team.save()

            //Update Event : increment seat and push team id into registered
            let event_update = {
                $inc: { seats: 1 },
                $push: { registered: new_team._id }
            }
            await Event.findOneAndUpdate({ eventCode: req.body.eventCode }, event_update)

            //Increase the current user's (leader's) moneyOwed 
            await User.findOneAndUpdate({ _id: req.user._id }, { $inc: { moneyOwed: event.entryFee } })

            //Update the criteria and event array for all the team members
            let user_update = {
                $set: {},
                $push: { events: event._id }
            }
            user_update.$set['criteria.' + event.day] = true
            user_update.$set['criteria.' + event.category] = true

            for (let i = 0; i < team.length; i++) {
                await User.findOneAndUpdate({ rollNo: team[i] }, user_update)
            }

            res.status(200).send([{ 'message': 'Criteria and Seats updated!' }])
        }
    } catch (e) {
        res.status(400).send([{error:e.message}])
    }
})

let hasDuplicates = (array) => {
    return (new Set(array)).size !== array.length;
}

module.exports = router;