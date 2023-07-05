const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userControllers");
const authMiddleware = require("../infra/middlewares/authMiddleware");

router.post("/login", UserController.login);
router.get("/", authMiddleware, UserController.getAllUsers);
router.get("/:id", authMiddleware, UserController.getUserById);
router.put("/:id", authMiddleware, UserController.updateUser);

module.exports = router;
