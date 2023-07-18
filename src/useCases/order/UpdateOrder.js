// updateOrder.js

class UpdateOrder {
  constructor(orderRepository, productRepository) {
    this.orderRepository = orderRepository;
    this.productRepository = productRepository;
  }

  async execute(orderId, updatedData) {
    try {
      // Verificar se o pedido existe
      const existingOrder = await this.orderRepository.getById(orderId);
      if (!existingOrder) {
        throw new Error("Order not found");
      }

      // Verificar e atualizar os dados do pedido
      if (updatedData.products) {
        // Verificar se os produtos existem e calcular o valor total
        let totalPrice = 0;
        for (const product of updatedData.products) {
          const productData = await this.productRepository.findById(
            product.productId
          );
          if (!productData) {
            throw new Error(`Product not found: ${product.productId}`);
          }
          totalPrice += productData.price * product.quantity;
        }
        updatedData.totalPrice = totalPrice;
      }

      const updatedOrder = await this.orderRepository.update(
        orderId,
        updatedData
      );

      return updatedOrder;
    } catch (error) {
      throw new Error("Failed to update order");
    }
  }
}

module.exports = UpdateOrder;
