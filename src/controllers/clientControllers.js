// importação dos repositories
const UserRepository = require("../repositories/userRepository");
const ClientRepository = require("../repositories/clientRepository");

//importação dos casos de uso
const CreateClient = require("../useCases/client/CreateClient");
const GetAllClients = require("../useCases/client/GetAllClients");
const GetClientById = require("../useCases/client/GetClientById");
const UpdateClient = require("../useCases/client/UpdateClient");
const DeleteClient = require("../useCases/client/DeleteClient");

class ClientController {
  async create(req, res) {
    try {
      const { username, password, email } = req.body;
      const userData = { username, password, email };
      const createClient = new CreateClient(UserRepository, ClientRepository);
      const client = await createClient.execute(userData);

      return res.status(201).json(client);
    } catch (error) {
      if (
        error.message.includes("Email already exists") ||
        error.message.includes("Username already exists")
      ) {
        return res.status(400).json({ error: error.message });
      } else {
        return res.status(500).json({ error: "Failed to create client" });
      }
    }
  }

  async getAll(req, res) {
    try {
      const getAllClients = new GetAllClients(ClientRepository);
      const clients = await getAllClients.execute();
      return res.status(200).json(clients);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch clients" });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const getClientById = new GetClientById(ClientRepository);
      const client = await getClientById.execute(id);
      return res.status(200).json(client);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch client" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, document, phone } = req.body;
      const clientData = { name, document, phone };

      const updateClient = new UpdateClient(ClientRepository);
      const updatedClient = await updateClient.execute(id, clientData);

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

      const deleteClient = new DeleteClient(ClientRepository, UserRepository);
      const deleted = await deleteClient.execute(id);

      if (!deleted) {
        return res.status(404).json({ error: "Client not found" });
      }

      return res.status(200).json({ message: "Client deleted successfully" });
    } catch (error) {
      if (error.message === "Client not found") {
        return res.status(404).json({ error: error.message });
      } else {
        return res.status(500).json({ error: "Failed to delete client" });
      }
    }
  }
}

module.exports = new ClientController();
