class GetProductById {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(productId) {
    try {
      // Obtenha o produto pelo ID do produto
      const product = await this.productRepository.getById(productId);

      // Verifique se o produto existe
      if (!product) {
        throw new Error("Product not found");
      }

      // Retorne o produto encontrado
      return product;
    } catch (error) {
      // Trate os erros e lance exceções, se necessário
      throw new Error("Failed to fetch product");
    }
  }
}

module.exports = GetProductById;
