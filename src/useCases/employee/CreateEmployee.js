const { hashPassword } = require("../../infra/bcryptConfig");

class CreateEmployee {
  constructor(userRepository, employeeRepository) {
    this.userRepository = userRepository;
    this.employeeRepository = employeeRepository;
  }

  async execute(userData) {
    // Verifique se já existe um usuário com o mesmo username ou email
    const accountLevel = 1;
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
      accountLevel,
    });

    // Verifique se o usuário foi criado com sucesso
    if (!newUser) {
      throw new Error("Failed to create user");
    }

    // Crie o funcionário no repositório de funcionários
    const employeeData = { user: newUser._id };
    const employee = await this.employeeRepository.create(employeeData);

    // Verifique se o funcionário foi criado com sucesso
    if (!employee) {
      // Em caso de falha ao criar o funcionário, remova o usuário criado anteriormente
      await this.userRepository.delete(user._id);
      throw new Error("Failed to create employee");
    }

    return employee;
  }
}

module.exports = CreateEmployee;
