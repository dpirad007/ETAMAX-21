const url = require('url')

var express = require('express');
var router = express.Router();
var passport = require('passport');
require('dotenv').config()

var Event = require('../models/event');
var User = require('../models/user');
var authenticate = require('../authenticate');

//URL: /api/events?day=n
router.get('/', authenticate.verifyUser, async (req, res) => {
    const urlObj = url.parse(req.originalUrl, true)
    try {
        let events = await Event.find({ day: urlObj.query.day })
        res.send(events)
    } catch (e) {
        res.status(401).send(e)
        console.log(e)
    }
})

//URL: /api/events/my-events
router.get('/my-events', authenticate.verifyUser, async (req, res) => {
    try {
        let my_events = []
        for (let i = 0; i < req.user.events.length; i++) {
            let event = await Event.findOne({ _id: req.user.events[i] }, { title: 1, description: 1 })
            my_events += event
        }
        res.send(my_events)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

//URL: /api/events/my-criteria
router.get('/my-status', authenticate.verifyUser, async (req, res) => {
    try {
        let crit = await User.findOne({ _id: req.user._id }, { criteria: 1, moneyOwed: 1 })
        let payment_status = Object.values(crit.criteria).every(v => v) && moneyOwed === 0
        res.status(200).send([crit, { payment_status }])
    } catch (e) {

    }
})

//URL: /api/events/register-event
router.post('/register-event', authenticate.verifyUser, async (req, res) => {
    try {
        let event = await Event.findOne({ eventCode: req.body.eventCode })
        if (event.maxSeats - event.seats === 0) {
            return res.status(400).send({ 'message': 'This event has no seats left!' })
        }
        if (event.teamSize === 1) {
            if (req.user.events.includes(event._id)) {
                return res.status(400).send({ 'message': 'Already registered for event!' })
            }

            let user_update = {
                $set: {},
                $inc: { moneyOwed: event.entryFee },
                $push: { events: event._id }
            }
            user_update.$set['criteria.' + event.day] = true
            user_update.$set['criteria.' + event.category] = true
            await User.findOneAndUpdate({ _id: req.user._id }, user_update)

            let event_update = {
                $inc: { seats: 1 },
                $push: { registered: req.user._id }
            }
            await Event.findOneAndUpdate({ eventCode: req.body.eventCode }, event_update)

            res.status(200).send({ 'message': 'Criteria and Seats updated!' })

        } else {
            res.send("Many")
        }
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})



module.exports = router;