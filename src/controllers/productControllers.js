const ProductRepository = require("../repositories/productRepository");

class ProductController {
  async create(req, res) {
    try {
      const { name, description, price, stock } = req.body;
      const productData = { name, description, price, stock };
      const product = await ProductRepository.create(productData);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create product" });
    }
  }

  async getAll(req, res) {
    try {
      const products = await ProductRepository.getAll();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch products" });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductRepository.getById(id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch product" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, description, price, stock } = req.body;
      const productData = { name, description, price, stock };
      const updatedProduct = await ProductRepository.update(id, productData);
      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.status(200).json(updatedProduct);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update product" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedProduct = await ProductRepository.delete(id);
      if (!deletedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete product" });
    }
  }
}

module.exports = new ProductController();
