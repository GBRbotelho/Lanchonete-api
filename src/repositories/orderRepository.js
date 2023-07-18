const orderSchema = require("../models/orderSchema");

class OrderRepository {
  async create(orderData) {
    const order = new orderSchema(orderData);
    return await order.save();
  }

  async getAll() {
    return await orderSchema.find();
  }

  async getById(orderId) {
    return await orderSchema.findById(orderId);
  }

  async update(orderId, orderData) {
    return await orderSchema.findByIdAndUpdate(orderId, orderData, {
      new: true,
    });
  }

  async delete(orderId) {
    return await orderSchema.findByIdAndDelete(orderId);
  }
}

module.exports = new OrderRepository();
