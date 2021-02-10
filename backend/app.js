var path = require('path');

var express = require('express');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
var passport = require('passport');
var cors = require('cors')


require('dotenv').config();

require('./db/mongoose')

var usersRouter = require('./routes/users');
var eventsRouter = require('./routes/events')

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(cors()) // Use this after the variable declaration

app.use('/api/users', usersRouter);
app.use('/api/events', eventsRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is up and running on port " + process.env.PORT)
})

