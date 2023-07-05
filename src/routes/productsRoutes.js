const express = require("express");
const productController = require("../controllers/productControllers");
const authMiddleware = require("../infra/middlewares/authMiddleware");

const router = express.Router();

// Rota para criar um novo produto
router.post("/", authMiddleware, productController.create);

// Rota para obter todos os produtos
router.get("/", authMiddleware, productController.getAll);

// Rota para obter um produto específico
router.get("/:id", authMiddleware, productController.getById);

// Rota para atualizar um produto
router.put("/:id", authMiddleware, productController.update);

// Rota para excluir um produto
router.delete("/:id", authMiddleware, productController.delete);

module.exports = router;
