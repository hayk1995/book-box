
class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async list(req, res) {
        const users = await this.userService.getUsers();
        res.send(users);
    }

}

UserController['@singleton'] = true;
UserController['@require'] = ['UserService'];

module.exports = UserController;