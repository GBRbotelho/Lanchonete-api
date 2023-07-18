const express = require("express");
const clientsRoutes = require("./clientsRoutes");
const productsRoutes = require("./productsRoutes");
const employeesRoutes = require("./employeesRoutes");
const usersRoutes = require("./usersRoutes");
const ordersRoutes = require("./ordersRoutes");

const router = express.Router();

// Rotas do Funcionario
router.use("/employees", employeesRoutes);

// Rotas do Cliente
router.use("/clients", clientsRoutes);

// Rotas dos Produtos
router.use("/products", productsRoutes);

// Rotas dos Usuarios
router.use("/users", usersRoutes);

// Rotas dos Pedidos
router.use("/orders", ordersRoutes);

module.exports = router;
