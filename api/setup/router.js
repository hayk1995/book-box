class AppRouter {
    setup(app, di) {
        app.get('/users', (req, res) => {
            di.userController.list(req, res);
        });

        app.get('/users/:userId', (req, res) => {
            di.userController.getById(req, res);
        });

        app.post('/users/:userId/services', (req, res) => {
            di.userController.createService(req, res);
        });
    }
}

module.exports = AppRouter;