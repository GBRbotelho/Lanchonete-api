class CreateClient {
  constructor(userRepository, clientRepository) {
    this.userRepository = userRepository;
    this.clientRepository = clientRepository;
  }

  async execute(userData) {
    try {
      // Verifica se já existe um usuário com o mesmo username ou email
      const existingUser = await this.userRepository.findByUsernameOrEmail(
        userData.username,
        userData.email
      );
      if (existingUser) {
        throw new Error("Username or email already exists");
      }

      // Cria o usuário no banco de dados
      const newUser = await this.userRepository.create(userData);
      // Cria o cliente no banco de dados associado ao userID do usuário
      const newClient = await this.clientRepository.create({
        user: newUser._id, // Associando o cliente ao userID do usuário criado
        // Outras informações do cliente, se houver...
      });

      // Retorna o cliente recém-criado
      return newClient;
    } catch (error) {
      // Tratar erros e lançar exceções, se necessário
      throw new Error("Failed to create client");
    }
  }
}

module.exports = CreateClient;
