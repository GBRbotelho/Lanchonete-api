const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

// Rota para criar um novo produto
router.post("/", productController.create);

// Rota para obter todos os produtos
router.get("/", productController.getAll);

// Rota para obter um produto específico
router.get("/:id", productController.getById);

// Rota para atualizar um produto
router.put("/:id", productController.update);

// Rota para excluir um produto
router.delete("/:id", productController.delete);

module.exports = router;
