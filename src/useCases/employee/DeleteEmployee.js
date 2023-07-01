class DeleteEmployee {
  constructor(employeeRepository, userRepository) {
    this.employeeRepository = employeeRepository;
    this.userRepository = userRepository;
  }

  async execute(employeeId) {
    // Obtenha o funcionário pelo ID
    const employee = await this.employeeRepository.getById(employeeId);

    // Verifique se o funcionário existe
    if (!employee) {
      throw new Error("Employee not found");
    }

    // Exclua o funcionário do repositório de funcionários
    const deletedEmployee = await this.employeeRepository.delete(employeeId);

    // Exclua também o usuário relacionado
    await this.userRepository.delete(employee.user);

    return deletedEmployee;
  }
}

module.exports = DeleteEmployee;
