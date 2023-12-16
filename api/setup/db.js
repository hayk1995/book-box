const mongoose = require("mongoose");

class DB {
    async setup() {
        await mongoose.connect('mongodb://localhost:27017/book-box-dev');
    }
}

module.exports = DB;