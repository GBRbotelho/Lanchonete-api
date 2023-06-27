const express = require("express");
const clientsRoutes = require("./clientsRoutes");
const productsRoutes = require("./productsRoutes");

const router = express.Router();

// Rotas do Cliente
router.use("/clients", clientsRoutes);

// Rotas dos Produtos
router.use("/products", productsRoutes);

module.exports = router;
