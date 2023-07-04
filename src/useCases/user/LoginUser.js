const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../../infra/jsonwebtokenConfig");

class LoginUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(usernameOrEmail, password) {
    try {
      // Procurar usuário por email ou username
      const user = await this.userRepository.findByUsernameOrEmail(
        usernameOrEmail
      );

      // Verificar se o usuário existe
      if (!user) {
        throw new Error("Invalid username or email");
      }

      // Verificar a senha
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      // Gerar token de autenticação
      const token = jwt.sign({ userId: user._id }, secretKey, {
        expiresIn: "1h",
      });

      user.token = token;
      user.tokenExpiration = new Date(Date.now() + 3600000);

      // Atualizar o documento do usuário no banco de dados
      await this.userRepository.update(user._id, user);

      // Retornar token
      return token;
    } catch (error) {
      throw new Error("Failed to login");
    }
  }
}

module.exports = LoginUser;
