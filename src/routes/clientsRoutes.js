const express = require("express");
const clientController = require("../controllers/clientControllers");
const authMiddleware = require("../infra/middlewares/authMiddleware");

const router = express.Router();

// Rota para criar um novo cliente
router.post("/", clientController.create);

// Rota para obter todos os clientes (requer autenticação)
router.get("/", authMiddleware, clientController.getAll);

// Rota para obter um cliente específico (requer autenticação)
router.get("/:id", authMiddleware, clientController.getById);

// Rota para atualizar um cliente (requer autenticação)
router.put("/:id", authMiddleware, clientController.update);

// Rota para excluir um cliente (requer autenticação)
router.delete("/:id", authMiddleware, clientController.delete);

module.exports = router;
