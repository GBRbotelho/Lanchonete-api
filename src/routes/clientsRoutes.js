const express = require("express");
const clientController = require("../controllers/clientControllers");

const router = express.Router();

// Rota para criar um novo cliente
router.post("/", clientController.create);

// Rota para obter todos os clientes
router.get("/", clientController.getAll);

// Rota para obter um cliente específico
router.get("/:id", clientController.getById);

// Rota para atualizar um cliente
router.put("/:id", clientController.update);

// Rota para excluir um cliente
router.delete("/:id", clientController.delete);

module.exports = router;
