const express = require('express')
const eventsRoute = new express.Router();
const Event = require('../models/event');

// GET /api/events/
eventsRoute.get('/', async(req, res) => {
    try {
        const event = await Event.find();
        res.send(event)
    }catch(err){
        res.status(400).send({message: err.message})   
    }
})


// POST /api/events/
eventsRoute.post('/', async(req, res) => {
    const event = new Event({
        eventId: req.body.eventId,
        // eventTime: req.body.eventTime,
        category: req.body.category,
        description: req.body.description,
        seats: req.body.seats,
        price: req.body.price,
        teamSize: req.body.teamSize,
        // registered: req.body.registered
    });
    try {
        const newEvent = await event.save();
        res.status(201).send({message: "Event stored successfully"});
    } catch (err) {
        res.status(400).send({message: err.message})
    }
})


module.exports = eventsRoute;