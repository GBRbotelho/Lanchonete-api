// deleteOrder.js

class DeleteOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(orderId) {
    try {
      const deletedOrder = await this.orderRepository.delete(orderId);
      if (!deletedOrder) {
        throw new Error("Order not found");
      }
      return deletedOrder;
    } catch (error) {
      throw new Error("Failed to delete order");
    }
  }
}

module.exports = DeleteOrder;
