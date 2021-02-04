const url = require('url')

var express = require('express');
var router = express.Router();
var passport = require('passport');
require('dotenv').config()

var Event = require('../models/event');
var authenticate = require('../authenticate');

//URL: /api/events?day=n
router.get('/', async (req, res) => {
    const urlObj = url.parse(req.originalUrl, true)
    try {
        let events = await Event.find({ day: urlObj.query.day })
        res.send(events)
    } catch (e) {
        res.status(401).send(e)
        console.log(e)
    }
})



module.exports = router;