
class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    list(req, res) {
        res.send(this.userService.getUsers());
    }

}

UserController['@singleton'] = true;
UserController['@require'] = ['UserService'];

module.exports = UserController;