var express = require('express');
var router = express.Router();
var passport = require('passport');
require('dotenv').config()

var Event = require('../models/event');
var authenticate = require('../authenticate');

//URL: /api/events

router.get('/', authenticate.verifyUser, async (req, res) => {
    try {
        let events = await Event.find({})
        res.send(events)
    } catch (e) {
        res.status(401).send(e)
    }
})

module.exports = router;