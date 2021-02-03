const mongoose = require("mongoose");
require('dotenv').config();
var config=require('../config');

const connect = mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

connect.then((db) => {
    console.log("Connected to database!");
}, (err) => { console.log(err) });
