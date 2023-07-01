// importação dos repositories
class GetAllClients {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute() {
    try {
      const clients = await this.clientRepository.getAll();
      return clients;
    } catch (error) {
      // Tratar erros e lançar exceções, se necessário
      throw new Error("Failed to fetch clients");
    }
  }
}

module.exports = GetAllClients;
