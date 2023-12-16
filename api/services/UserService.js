class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getUsers() {
        return this.userRepository.list();
    }
}

UserService['@singleton'] = true;
UserService['@require'] = ['UserRepository'];

module.exports = UserService;