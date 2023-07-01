class GetAllProducts {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute() {
    try {
      // Obtenha todos os produtos do banco de dados
      const products = await this.productRepository.getAll();

      // Retorne a lista de produtos
      return products;
    } catch (error) {
      // Trate os erros e lance exceções, se necessário
      throw new Error("Failed to fetch products");
    }
  }
}

module.exports = GetAllProducts;
