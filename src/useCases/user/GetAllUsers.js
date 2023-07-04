class GetAllUsers {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    try {
      const users = await this.userRepository.getAll();
      return users;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }
}

module.exports = GetAllUsers;
