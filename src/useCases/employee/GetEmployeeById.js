class GetEmployeeById {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async execute(employeeId) {
    const employee = await this.employeeRepository.getById(employeeId);
    return employee;
  }
}

module.exports = GetEmployeeById;
