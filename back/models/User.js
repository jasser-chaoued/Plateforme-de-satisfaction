// models/User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
    userName: {
        type: String
    },
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    adress: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    postalCode: {
        type: Number
    },
    phone: {
        type: Number
    },
    aboutMe: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: 'users'
})

userSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('User', userSchema)