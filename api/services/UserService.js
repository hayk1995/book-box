const NotFound = require("../exeption/NotFound")
const PreconditionViolated = require("../exeption/PreconditionViolated")

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
            throw new NotFound('User not found');
        }

        const serviceExists = user.services.some(service => service.name === serviceData.name);
        if (serviceExists) {
            throw new PreconditionViolated('Service with the same name already exists');
        }
        if (!serviceData.price || serviceData.price <= 0) {
            throw new PreconditionViolated('Price should be greater than 0');
        }
        if (!serviceData.durationInSecond || serviceData.durationInSecond < 300) {
            throw new PreconditionViolated('Duration should be at least 5 min');
        }

        user.services.push(serviceData);

        await user.save();
        return user;
    }

    async updateUserService(userId, serviceId, serviceData) {
        const user = await this.userRepository.getById(userId);
        if (!user) {
            throw new NotFound('User not found');
        }

        const service = user.services.find(service => service._id === serviceId);
        if (!service) {
            throw new NotFound('Service not found');
        }

        if (!serviceData.price || serviceData.price <= 0) {
            throw new PreconditionViolated('Price should be greater than 0');
        }
        if (!serviceData.durationInSecond || serviceData.durationInSecond < 300) {
            throw new PreconditionViolated('Duration should be at least 5 min');
        }

        for (const key in serviceData) {
            if (serviceData.hasOwnProperty(key) && key !== '_id') {
                service[key] = serviceData[key];
            }
        }

        await user.save();
        return user;
    }

    async removeServiceFromUser(userId, serviceId) {
        const user = await this.userRepository.getById(userId);
        if (!user) {
            throw new NotFound('User not found');
        }

        user.services = user.services.filter(service => service._id !== serviceId);

        await user.save();
        return user;
    }
}

UserService['@singleton'] = true;
UserService['@require'] = ['UserRepository'];

module.exports = UserService;