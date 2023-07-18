// getOrderById.js

class GetOrderById {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(orderId) {
    try {
      const order = await this.orderRepository.getById(orderId);
      if (!order) {
        throw new Error("Order not found");
      }
      return order;
    } catch (error) {
      throw new Error("Failed to get order");
    }
  }
}

module.exports = GetOrderById;
