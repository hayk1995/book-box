const IoC = require('electrolyte');

IoC.use(IoC.dir('controllers'));
IoC.use(IoC.dir('services'));
class Di {
    userController;
    async setup() {
        const [userController] = await Promise.all([IoC.create('UserController')]);
        this.userController = userController;
    }
}

module.exports = Di;