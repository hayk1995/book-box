class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }

    list() {
        return this.userModel.find().lean();
    }

    getById(id) {
        return this.userModel.findById(id);
    }

    save(userObj) {
        return this.userModel.create(userObj)
    }
}

UserRepository['@singleton'] = true;
UserRepository['@require'] = ['UserModel'];

module.exports = UserRepository;