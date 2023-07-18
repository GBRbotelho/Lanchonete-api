// getAllOrders.js

class GetAllOrders {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute() {
    try {
      const orders = await this.orderRepository.getAll();
      return orders;
    } catch (error) {
      throw new Error("Failed to get orders");
    }
  }
}

module.exports = GetAllOrders;
