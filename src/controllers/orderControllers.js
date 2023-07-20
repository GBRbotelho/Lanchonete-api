const CreateOrder = require("../useCases/order/CreateOrder");
const UpdateOrder = require("../useCases/order/UpdateOrder");
const GetOrderById = require("../useCases/order/GetOrderById");
const GetAllOrders = require("../useCases/order/GetAllOrders");
const DeleteOrder = require("../useCases/order/DeleteOrder");

const clientRepository = require("../repositories/clientRepository");
const orderRepository = require("../repositories/orderRepository");
const productRepository = require("../repositories/productRepository");

const { getIo } = require("../infra/websocketConfig");
class OrderController {
  async create(req, res) {
    try {
      const orderData = req.body;
      const createOrder = new CreateOrder(
        orderRepository,
        clientRepository,
        productRepository
      );
      const create = await createOrder.execute(orderData);
      return res.status(201).json(create);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create order" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updateOrder = new UpdateOrder(orderRepository, productRepository);
      const updatedOrder = await updateOrder.execute(id, updatedData, getIo());
      return res.status(200).json(updatedOrder);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update order" });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const getOrderById = new GetOrderById(orderRepository);
      const order = await getOrderById.execute(id);
      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ error: "Failed to get order" });
    }
  }

  async getAll(req, res) {
    try {
      const getAllOrders = new GetAllOrders(orderRepository);
      const orders = await getAllOrders.execute();
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: "Failed to get orders" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteOrder = new DeleteOrder(orderRepository);
      const deletedOrder = await deleteOrder.execute(id);
      return res.status(200).json(deletedOrder);
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete order" });
    }
  }
}

module.exports = new OrderController();
