class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getUsers() {
        return this.userRepository.list();
    }

    getById(id) {
        return this.userRepository.getById(id);
    }

    async addServiceToUser(userId, serviceData) {
        const user = await this.userRepository.getById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        console.log(serviceData)
        user.services.push(serviceData);

        await user.save();
        return user;
    }
}

UserService['@singleton'] = true;
UserService['@require'] = ['UserRepository'];

module.exports = UserService;