const express = require('express');
const bodyParser = require('body-parser')

const DI = require('./setup/di');
const AppRouter = require('./setup/router');
const MigrationService = require('./services/MigrationService');
// Create an Express application

const app = express();
const di = new DI();
const appRouter = new AppRouter();


async function start() {
    await di.setup();
    app.use(bodyParser.json())
    appRouter.setup(app, di);
    di.migrationService.import();


    const port = 8080;
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

start()
    .then((res)=>{
        console.log('Application initialized')
    });
