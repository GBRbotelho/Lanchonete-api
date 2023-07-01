class DeleteClient {
  constructor(clientRepository, userRepository) {
    this.clientRepository = clientRepository;
    this.userRepository = userRepository;
  }

  async execute(clientId) {
    try {
      const client = await this.clientRepository.getById(clientId);

      if (!client) {
        throw new Error("Client not found");
      }

      // Excluir o cliente
      await this.clientRepository.delete(clientId);

      // Excluir o usuário associado ao cliente
      await this.userRepository.delete(client.user);

      return true;
    } catch (error) {
      throw new Error("Failed to delete client");
    }
  }
}

module.exports = DeleteClient;
