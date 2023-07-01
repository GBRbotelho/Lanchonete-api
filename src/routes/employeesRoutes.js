const express = require("express");
const employeeController = require("../controllers/employeeControllers");

const router = express.Router();

// Rota para criar um novo funcionário
router.post("/", employeeController.create);

// Rota para obter todos os funcionários
router.get("/", employeeController.getAll);

// Rota para obter um funcionário específico
router.get("/:id", employeeController.getById);

// Rota para atualizar um funcionário
router.put("/:id", employeeController.update);

// Rota para excluir um funcionário
router.delete("/:id", employeeController.delete);

module.exports = router;
