require('dotenv').config();
const config = require('config');

class Settings {
    constructor() {

    }

    get(path) {
        return config.get(path);
    }
}

Settings['@singleton'] = true;
module.exports = Settings;