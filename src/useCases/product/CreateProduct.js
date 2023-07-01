class CreateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(productData) {
    try {
      // Verifique se o produto já existe pelo nome
      const existingProduct = await this.productRepository.findByName(
        productData.name
      );
      if (existingProduct) {
        throw new Error("Product already exists");
      }

      // Crie o produto no banco de dados
      const newProduct = await this.productRepository.create(productData);

      // Retorne o produto recém-criado
      return newProduct;
    } catch (error) {
      // Trate os erros e lance exceções, se necessário
      throw new Error("Failed to create product");
    }
  }
}

module.exports = CreateProduct;
