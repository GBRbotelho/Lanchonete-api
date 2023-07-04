const User = require("../models/userSchema");

class UserRepository {
  async findById(userId) {
    return await User.findById(userId);
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findByUsername(username) {
    return await User.findOne({ username });
  }

  async findByUsernameOrEmail(usernameOrEmail) {
    return await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });
  }

  async update(userId, userData) {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
  }

  async getAll() {
    return await User.find();
  }

  async create(userData) {
    return await User.create(userData);
  }

  // Outros métodos de acesso aos dados do usuário, se necessário...
}

module.exports = new UserRepository();
