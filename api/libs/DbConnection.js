const mongoose = require("mongoose");

function DbConnection(settings) {
    const dbUri = settings.get('db.uri');
    return mongoose.connect(dbUri);
}

DbConnection['@singleton'] = true;
DbConnection['@require'] = ['Settings'];
module.exports = DbConnection;