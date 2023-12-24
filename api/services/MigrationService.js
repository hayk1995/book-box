class MigrationService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async import() {
    try {
      const id = '7157ce7e-143c-42df-8fa3-ada50a44cfb3'

      let user = await this.userRepository.getById({_id: id});

      if (!user) {
        user = {
          _id: id,
          name: "Initial",
          sureName: "User",
          email: "email",
          token: "some-token",
          services: []
        };

        await this.userRepository.save(user);
        console.log('Initial user created.');
      } else {
        console.log('Initial user already exists.');
      }
    } catch (error) {
      console.error('Error initializing user:', error);
    }

  }
}

MigrationService['@singleton'] = true;
MigrationService['@require'] = ['UserRepository'];

module.exports = MigrationService;