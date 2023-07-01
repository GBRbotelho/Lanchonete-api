const express = require("express");
const clientsRoutes = require("./clientsRoutes");
const productsRoutes = require("./productsRoutes");
const employeeRoutes = require("./employeesRoutes");

const router = express.Router();

// Rotas do Funcionario
router.use("/employees", employeeRoutes);

// Rotas do Cliente
router.use("/clients", clientsRoutes);

// Rotas dos Produtos
router.use("/products", productsRoutes);

module.exports = router;
