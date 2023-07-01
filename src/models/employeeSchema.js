const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    default: null,
  },
  phone: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: false,
    default: null,
  },
  department: {
    type: String,
    required: false,
    default: null,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Outras informações adicionais sobre o funcionário, se necessário
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
