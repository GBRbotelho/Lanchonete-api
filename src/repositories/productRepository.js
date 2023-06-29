const Product = require("../models/productSchema");

class ProductRepository {
  async create(productData) {
    const product = new Product(productData);
    return await product.save();
  }

  async getAll() {
    return await Product.find();
  }

  async getById(productId) {
    return await Product.findById(productId);
  }

  async update(productId, productData) {
    return await Product.findByIdAndUpdate(productId, productData, {
      new: true,
    });
  }

  async delete(productId) {
    return await Product.findByIdAndDelete(productId);
  }
}

module.exports = new ProductRepository();
