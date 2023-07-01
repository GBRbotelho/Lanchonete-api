// Importe o repositório relevante
class DeleteProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(productId) {
    try {
      // Verifique se o produto existe pelo ID
      const existingProduct = await this.productRepository.getById(productId);
      if (!existingProduct) {
        throw new Error("Product not found");
      }

      // Exclua o produto do banco de dados
      await this.productRepository.delete(productId);

      // Retorne uma mensagem de sucesso
      return "Product deleted successfully";
    } catch (error) {
      // Trate os erros e lance exceções, se necessário
      throw new Error("Failed to delete product");
    }
  }
}

module.exports = DeleteProduct;
