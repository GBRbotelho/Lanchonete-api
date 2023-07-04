const { hashPassword } = require("../../infra/bcryptConfig");

class CreateClient {
  constructor(userRepository, clientRepository) {
    this.userRepository = userRepository;
    this.clientRepository = clientRepository;
  }

  async execute(userData) {
    try {
      const { username, email, password } = userData;

      // Verifica se já existe um usuário com o mesmo email
      const existingUserByEmail = await this.userRepository.findByEmail(email);
      if (existingUserByEmail) {
        throw { message: "Email already exists" };
      }

      // Verifica se já existe um usuário com o mesmo username
      const existingUserByUsername = await this.userRepository.findByUsername(
        username
      );
      if (existingUserByUsername) {
        throw { message: "Username already exists" };
      }

      // Hash da senha
      const hashedPassword = await hashPassword(password);

      // Cria o usuário no banco de dados
      const newUser = await this.userRepository.create({
        username,
        email,
        password: hashedPassword,
      });

      // Cria o cliente no banco de dados associado ao userID do usuário
      const newClient = await this.clientRepository.create({
        user: newUser._id, // Associando o cliente ao userID do usuário criado
        // Outras informações do cliente, se houver...
      });

      // Retorna o cliente recém-criado
      return newClient;
    } catch (error) {
      throw { message: error.message };
    }
  }
}

module.exports = CreateClient;
