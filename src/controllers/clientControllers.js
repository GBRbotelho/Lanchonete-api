const ClientRepository = require("../repositories/clientRepository");

class ClientController {
  async create(req, res) {
    try {
      console.log(req.body);
      const { name, document, email, phone } = req.body;
      const clientData = { name, document, email, phone };
      const client = await ClientRepository.create(clientData);
      return res.status(201).json(client);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create client" });
    }
  }

  async getAll(req, res) {
    try {
      const clients = await ClientRepository.getAll();
      return res.status(200).json(clients);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch clients" });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const client = await ClientRepository.getById(id);
      if (!client) {
        return res.status(404).json({ error: "Client not found" });
      }
      return res.status(200).json(client);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch client" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, document, email, phone } = req.body;
      const clientData = { name, document, email, phone };
      const updatedClient = await ClientRepository.update(id, clientData);
      if (!updatedClient) {
        return res.status(404).json({ error: "Client not found" });
      }
      return res.status(200).json(updatedClient);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update client" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedClient = await ClientRepository.delete(id);
      if (!deletedClient) {
        return res.status(404).json({ error: "Client not found" });
      }
      return res.status(200).json({ message: "Client deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete client" });
    }
  }
}

module.exports = new ClientController();
