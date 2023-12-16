class AppRouter {
    setup(app, di) {
        app.get('/users', (req, res) => {
            di.userController.list(req, res);
        });
    }
}

module.exports = AppRouter;