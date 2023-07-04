const UserRepository = require("../repositories/userRepository");
const GetUserById = require("../useCases/user/GetUserById");
const UpdateUser = require("../useCases/user/UpdateUser");
const LoginUser = require("../useCases/user/LoginUser");
const GetAllUsers = require("../useCases/user/GetAllUsers");

class UserController {
  async getAllUsers(req, res) {
    try {
      const getAllUsers = new GetAllUsers(UserRepository);
      const users = await getAllUsers.execute();
      console.log(users);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch users" });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const getUserById = new GetUserById(UserRepository);
      const user = await getUserById.execute(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch user" });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { username, email, password, accountLevel } = req.body;
      const userData = { username, email, password, accountLevel };

      const updateUser = new UpdateUser(UserRepository);
      const updatedUser = await updateUser.execute(id, userData);

      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update user" });
    }
  }

  async login(req, res) {
    try {
      const { usernameOrEmail, password } = req.body;
      const loginUser = new LoginUser(UserRepository);
      const token = await loginUser.execute(usernameOrEmail, password);
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  }
}

module.exports = new UserController();
