const User = require("../models/userSchema");

class UserRepository {
  async create(userData) {
    const newUser = new User(userData);
    return await newUser.save();
  }

  async findById(userId) {
    return await User.findById(userId);
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findByUsername(username) {
    return await User.findOne({ username });
  }

  async findByUsernameOrEmail(username, email) {
    return await User.findOne({ $or: [{ username }, { email }] });
  }

  async update(userId, userData) {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
  }

  async delete(userId) {
    return await User.findByIdAndDelete(userId);
  }

  // Outros métodos de acesso aos dados do usuário, se necessário...
}

module.exports = new UserRepository();