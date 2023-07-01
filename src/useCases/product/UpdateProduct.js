class UpdateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(productId, productData) {
    try {
      // Verifique se o produto existe
      const existingProduct = await this.productRepository.getById(productId);
      if (!existingProduct) {
        throw new Error("Product not found");
      }

      // Atualize os dados do produto
      const updatedProduct = await this.productRepository.update(
        productId,
        productData
      );

      // Retorne o produto atualizado
      return updatedProduct;
    } catch (error) {
      // Trate os erros e lance exceções, se necessário
      throw new Error("Failed to update product");
    }
  }
}

module.exports = UpdateProduct;
