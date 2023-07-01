class CreateEmployee {
  constructor(userRepository, employeeRepository) {
    this.userRepository = userRepository;
    this.employeeRepository = employeeRepository;
  }

  async execute(userData) {
    // Verifique se já existe um usuário com o mesmo username ou email
    const accountLevel = 1;
    const { username, email } = userData;
    const existingUser = await this.userRepository.findByUsernameOrEmail(
      username,
      email
    );
    if (existingUser) {
      throw new Error("Username or email already exists");
    }

    // Adicione o accountLevel aos dados do usuário
    userData.accountLevel = accountLevel;

    // Crie o usuário no repositório de usuários
    const user = await this.userRepository.create(userData);

    // Verifique se o usuário foi criado com sucesso
    if (!user) {
      throw new Error("Failed to create user");
    }

    // Crie o funcionário no repositório de funcionários
    const employeeData = { user: user._id };
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
