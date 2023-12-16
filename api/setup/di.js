const IoC = require('electrolyte');

IoC.use(IoC.dir('controllers'));
IoC.use(IoC.dir('db/models'));
IoC.use(IoC.dir('db/repositories'));
IoC.use(IoC.dir('services'));
class DI {
    userController;
    async setup() {
        const [userController] = await Promise.all([IoC.create('UserController')]);
        this.userController = userController;
    }
}

module.exports = DI;