// createOrder.js

class CreateOrder {
  constructor(orderRepository, clientRepository, productRepository) {
    this.orderRepository = orderRepository;
    this.clientRepository = clientRepository;
    this.productRepository = productRepository;
  }

  async execute(orderData) {
    try {
      // Extrair os dados do pedido
      const { clientId, products } = orderData;

      // Verificar se o cliente existe
      const client = await this.clientRepository.getById(clientId);
      if (!client) {
        throw new Error("Client not found");
      }

      // Verificar se os produtos existem e calcular o valor total
      let totalPrice = 0;
      for (const product of products) {
        const productData = await this.productRepository.getById(
          product.productId
        );
        if (!productData) {
          throw new Error(`Product not found: ${product.productId}`);
        }
        product.productId = productData._id;
        totalPrice += productData.price * product.quantity;
      }

      // Criar o novo pedido
      const newOrder = await this.orderRepository.create({
        client: client._id,
        products,
        totalPrice,
      });

      return newOrder;
    } catch (error) {
      throw new Error("Failed to create order");
    }
  }
}

module.exports = CreateOrder;
