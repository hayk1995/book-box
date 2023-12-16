const mongoose = require('mongoose');
const UserSchema = require('../schemas/UserSchema');

function UserModel(dbConnection) {
   const connection = dbConnection || mongoose.connection;

   if (connection.modelNames().includes('_users')) {
      return connection.model('_users');
   }

   return connection.model('User', UserSchema, '_users')
}

UserModel['@singleton'] = true;
UserModel['@require'] = ['DbConnection'];
module.exports = UserModel;
