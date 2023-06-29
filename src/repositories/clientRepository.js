const clientSchema = require("../models/clientSchema");

class ClientRepository {
  async create(clientData) {
    const client = new clientSchema(clientData);
    return await client.save();
  }

  async getAll() {
    return await clientSchema.find();
  }

  async getById(clientId) {
    return await clientSchema.findById(clientId);
  }

  async update(clientId, clientData) {
    return await clientSchema.findByIdAndUpdate(clientId, clientData, {
      new: true,
    });
  }

  async delete(clientId) {
    return await clientSchema.findByIdAndDelete(clientId);
  }
}

module.exports = new ClientRepository();
