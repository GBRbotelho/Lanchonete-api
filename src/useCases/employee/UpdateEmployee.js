class UpdateEmployee {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async execute(employeeId, employeeData) {
    // Verifique se o funcionário existe antes de atualizá-lo
    const existingEmployee = await this.employeeRepository.getById(employeeId);
    if (!existingEmployee) {
      throw new Error("Employee not found");
    }

    const updatedEmployee = await this.employeeRepository.update(
      employeeId,
      employeeData
    );
    return updatedEmployee;
  }
}

module.exports = UpdateEmployee;
