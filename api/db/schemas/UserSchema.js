const mongoose = require('mongoose');
const ServiceSchema = require('./ServiceSchema')
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;

const RecurringAvailabilitySchema = new Schema({
    dayOfWeek: {
        type: String,
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    creationDateTime: {
        type: Date,
        default: Date.now
    },
});

const FixedAvailabilitySchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    creationDateTime: {
        type: Date,
        default: Date.now
    },
});

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
    recurringAvailabilities: [RecurringAvailabilitySchema],
    fixedAvailabilities: [FixedAvailabilitySchema],
    creationDateTime: {
        type: Date,
        default: Date.now
    },
    lastModified: {
        type: Date,
        default: Date.now
    }
});

module.exports = UserSchema;
