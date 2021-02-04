var mongoose = require('mongoose');
const validator = require('validator');
var passportLocalMongoose = require('passport-local-mongoose');

const Event = require('./event')

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate(value) {
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid');
            }
        },
    },
    rollNo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 6,
        validate(value) {
            const re = /^\d{6,7}$/g;
            if (!re.test(String(value))) {
                throw new Error('Rollno is not valid');
            }
        },
    },
    department: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
    },
    criteria: {
        1: { type: Boolean, default: false },
        2: { type: Boolean, default: false },
        3: { type: Boolean, default: false },
        C: { type: Boolean, default: false },
        T: { type: Boolean, default: false },
        F: { type: Boolean, default: false }
    },
    moneyOwed: {
        type: Number,
        default: 0,
        trim: true,
    },
    hasFilledProfile: {
        type: Boolean,
        default: false
    },
    events: [
        { type: mongoose.Schema.Types.ObjectId, ref: Event }
    ]
    // tokens: [
    //     {
    //         token: {
    //             type: String,
    //         },
    //     },
    // ]
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', userSchema);