
class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async list(req, res) {
        const users = await this.userService.getUsers();
        res.send(users);
    }

    async getById(req, res) {
        let userId = req.params.userId;
        const user = await this.userService.getById(userId);
        if (!user) {
            return res.status(404).send({ message: `User with Id ${userId} wasn't found` });
        }
        res.send(user);
    }

    async createService(req, res) {
        const userId = req.params.userId;
        const serviceData = req.body;

        try {
            const updatedUser = await this.userService.addServiceToUser(userId, serviceData);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

UserController['@singleton'] = true;
UserController['@require'] = ['UserService'];

module.exports = UserController;