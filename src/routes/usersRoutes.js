const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userControllers");

router.post("/login", UserController.login);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser);

module.exports = router;
