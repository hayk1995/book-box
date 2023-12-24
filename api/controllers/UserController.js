const NotFound = require("../exeption/NotFound");

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
      throw new NotFound('User not found');
    }
    res.send(user);
  }

  async createService(req, res) {
    const userId = req.params.userId;
    const serviceData = req.body;
      const updatedUser = await this.userService.addServiceToUser(userId, serviceData);
      res.status(200).json(updatedUser);
  }

  async updateService(req, res) {
    const { userId, serviceId } = req.params;
    const serviceData = req.body;

    try {
      const updatedUser = await this.userService.updateUserService(userId, serviceId, serviceData);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteService(req, res) {
    const userId = req.params.userId;
    const serviceId = req.params.serviceId;

    try {
      const updatedUser = await this.userService.removeServiceFromUser(userId,
          serviceId);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }

}

UserController['@singleton'] = true;
UserController['@require'] = ['UserService'];

module.exports = UserController;