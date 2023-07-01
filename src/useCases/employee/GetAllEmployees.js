class GetAllEmployees {
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async execute() {
    const employees = await this.employeeRepository.getAll();
    return employees;
  }
}

module.exports = GetAllEmployees;
