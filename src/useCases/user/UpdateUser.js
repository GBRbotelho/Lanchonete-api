class UpdateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(userId, userData) {
    try {
      // Verifica se o usuário existe
      const existingUser = await this.userRepository.findById(userId);

      if (!existingUser) {
        throw new Error("User not found");
      }

      // Atualiza os dados do usuário
      const updatedUser = await this.userRepository.update(userId, userData);

      return updatedUser;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  }
}

module.exports = UpdateUser;
