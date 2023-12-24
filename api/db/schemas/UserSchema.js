const mongoose = require('mongoose');
const ServiceSchema = require('./ServiceSchema')
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;

const UserSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: String,
    sureName: String,
    email: String,
    token: String,
    services: [ServiceSchema],
    creationDateTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = UserSchema;