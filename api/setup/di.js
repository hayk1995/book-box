const IoC = require('electrolyte');

IoC.use(IoC.dir('libs'));
IoC.use(IoC.dir('controllers'));
IoC.use(IoC.dir('db/models'));
IoC.use(IoC.dir('db/repositories'));
IoC.use(IoC.dir('services'));
class DI {
    userController;
    async setup() {
        const [migrationService, userController] = await Promise.all([IoC.create('MigrationService'), IoC.create('UserController')]);
        this.migrationService = migrationService;
        this.userController = userController;
    }
}

module.exports = DI;