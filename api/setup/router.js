class AppRouter {
    setup(app, di) {
        app.get('/users', async (req, res) => {
            await di.userController.list(req, res);
        });

        app.get('/users/:userId', async (req, res) => {
            await di.userController.getById(req, res);
        });

        app.post('/users/:userId/services', async (req, res) => {
            await di.userController.createService(req, res);
        });

        app.delete('/users/:userId/services/:serviceId', async (req, res) => {
            await di.userController.deleteService(req, res);
        });

        app.put('/users/:userId/services/:serviceId', async (req, res) => {
            await di.userController.updateService(req, res);
        });

        app.put('/users/:userId/recurring-availability', async (req, res) => {
            await di.userController.upsertRecurringAvailability(req, res);
        });

        app.put('/users/:userId/fixed-availability', async (req, res) => {
            await di.userController.upsertFixedAvailability(req, res);
        });

    }
}

module.exports = AppRouter;