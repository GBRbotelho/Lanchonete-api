const express = require("express");
const employeeController = require("../controllers/employeeControllers");
const authMiddleware = require("../infra/middlewares/authMiddleware");

const router = express.Router();

// Rota para criar um novo funcionário
router.post("/", employeeController.create);

// Rota para obter todos os funcionários
router.get("/", authMiddleware, employeeController.getAll);

// Rota para obter um funcionário específico
router.get("/:id", authMiddleware, employeeController.getById);

// Rota para atualizar um funcionário
router.put("/:id", authMiddleware, employeeController.update);

// Rota para excluir um funcionário
router.delete("/:id", authMiddleware, employeeController.delete);

module.exports = router;
