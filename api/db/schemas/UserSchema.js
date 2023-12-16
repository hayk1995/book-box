const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    surname: String
});

module.exports = UserSchema;