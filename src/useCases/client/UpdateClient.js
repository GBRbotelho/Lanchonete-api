class UpdateClient {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute(clientId, clientData) {
    try {
      // Verifica se o cliente existe
      const existingClient = await this.clientRepository.getById(clientId);
      if (!existingClient) {
        throw new Error("Client not found");
      }

      // Atualiza os dados do cliente
      const updatedClient = await this.clientRepository.update(
        clientId,
        clientData
      );

      return updatedClient;
    } catch (error) {
      // Tratar erros e lançar exceções, se necessário
      throw new Error("Failed to update client");
    }
  }
}

module.exports = UpdateClient;
