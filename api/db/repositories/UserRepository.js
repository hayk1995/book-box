class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }

    list() {
        return this.userModel.find().lean();
    }
}

UserRepository['@singleton'] = true;
UserRepository['@require'] = ['UserModel'];

module.exports = UserRepository;