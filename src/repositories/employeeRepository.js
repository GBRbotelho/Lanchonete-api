const Employee = require("../models/employeeSchema");

class EmployeeRepository {
  async create(employeeData) {
    const employee = new Employee(employeeData);
    return await employee.save();
  }

  async getAll() {
    return await Employee.find();
  }

  async getById(employeeId) {
    return await Employee.findById(employeeId);
  }

  async update(employeeId, employeeData) {
    return await Employee.findByIdAndUpdate(employeeId, employeeData, {
      new: true,
    });
  }

  async delete(employeeId) {
    return await Employee.findByIdAndDelete(employeeId);
  }
}

module.exports = new EmployeeRepository();
