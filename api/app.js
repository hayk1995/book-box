const express = require('express');

const DI = require('./setup/di');
const AppRouter = require('./setup/router');
// Create an Express application

const app = express();
const di = new DI();
const appRouter = new AppRouter();


async function start() {
    await di.setup();
    appRouter.setup(app, di);

    const port = 3000;
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

start()
    .then((res)=>{
        console.log('Application initialized')
    });
