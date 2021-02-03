const mongoose = require("mongoose");
require('dotenv').config();

const connect = mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

connect.then((db) => {
    console.log("Connected to database!");
}, (err) => { console.log(err) });
