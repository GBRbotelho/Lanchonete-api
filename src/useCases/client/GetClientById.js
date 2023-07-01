class GetClientById {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute(clientId) {
    try {
      const client = await this.clientRepository.getById(clientId);
      if (!client) {
        throw new Error("Client not found");
      }
      return client;
    } catch (error) {
      // Tratar erros e lançar exceções, se necessário
      throw new Error("Failed to fetch client");
    }
  }
}

module.exports = GetClientById;
