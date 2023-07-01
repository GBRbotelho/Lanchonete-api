// Importação dos repositories
const UserRepository = require("../repositories/userRepository");
const EmployeeRepository = require("../repositories/employeeRepository");

// Importação dos casos de uso
const CreateEmployee = require("../useCases/employee/CreateEmployee");
const GetAllEmployees = require("../useCases/employee/GetAllEmployees");
const GetEmployeeById = require("../useCases/employee/GetEmployeeById");
const UpdateEmployee = require("../useCases/employee/UpdateEmployee");
const DeleteEmployee = require("../useCases/employee/DeleteEmployee");

class EmployeeController {
  async create(req, res) {
    try {
      const { username, password, email } = req.body;
      const userData = { username, password, email };
      const createEmployee = new CreateEmployee(
        UserRepository,
        EmployeeRepository
      );
      const employee = await createEmployee.execute(userData);

      return res.status(201).json(employee);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create employee" });
    }
  }

  async getAll(req, res) {
    try {
      const getAllEmployees = new GetAllEmployees(EmployeeRepository);
      const employees = await getAllEmployees.execute();
      return res.status(200).json(employees);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch employees" });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const getEmployeeById = new GetEmployeeById(EmployeeRepository);
      const employee = await getEmployeeById.execute(id);
      return res.status(200).json(employee);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch employee" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, department, position } = req.body;
      const employeeData = { name, department, position };

      const updateEmployee = new UpdateEmployee(EmployeeRepository);
      const updatedEmployee = await updateEmployee.execute(id, employeeData);

      if (!updatedEmployee) {
        return res.status(404).json({ error: "Employee not found" });
      }

      return res.status(200).json(updatedEmployee);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update employee" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const deleteEmployee = new DeleteEmployee(
        EmployeeRepository,
        UserRepository
      );
      const deleted = await deleteEmployee.execute(id);

      if (!deleted) {
        return res.status(404).json({ error: "Employee not found" });
      }

      return res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete employee" });
    }
  }
}

module.exports = new EmployeeController();
