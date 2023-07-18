const express = require("express");
const orderController = require("../controllers/orderControllers");

const router = express.Router();

router.post("/", orderController.create);
router.put("/:id", orderController.update);
router.get("/:id", orderController.getById);
router.get("/", orderController.getAll);
router.delete("/:id", orderController.delete);

module.exports = router;
