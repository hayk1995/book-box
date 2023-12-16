const mongoose = require('mongoose');
const UserSchema = require('../schemas/UserSchema');

function UserModel() {
   return mongoose.model('_users', UserSchema)
}

UserModel['@singleton'] = true;
module.exports = UserModel;
