const mongoose = require('mongoose');
const {v4: uuidv4} = require("uuid");

const { Schema } = mongoose;

const ServiceSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  name: String,
  description: String,
  price: Number,
  currency: String,
  durationInSecond: Number,
  creationDateTime: {
    type: Date,
    default: Date.now
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
});

module.exports = ServiceSchema;