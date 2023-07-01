//Importação do repositorio
const ProductRepository = require("../repositories/productRepository");

//Importação dos useCases
const CreateProduct = require("../useCases/product/CreateProduct");
const GetAllProducts = require("../useCases/product/GetAllProducts");
const GetProductById = require("../useCases/product/GetProductById");
const UpdateProduct = require("../useCases/product/UpdateProduct");
const DeleteProduct = require("../useCases/product/DeleteProduct");

class ProductController {
  async create(req, res) {
    try {
      const { name, description, price, stock } = req.body;
      const productData = { name, description, price, stock };
      const createProduct = new CreateProduct(ProductRepository);
      const product = await createProduct.execute(productData);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create product" });
    }
  }

  async getAll(req, res) {
    try {
      const getAllProducts = new GetAllProducts(ProductRepository);
      const products = await getAllProducts.execute();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch products" });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const getProductById = new GetProductById(ProductRepository);
      const product = await getProductById.execute(id);
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
      const updateProduct = new UpdateProduct(ProductRepository);
      const updatedProduct = await updateProduct.execute(id, productData);
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
      const deleteProduct = new DeleteProduct(ProductRepository);
      const deletedProduct = await deleteProduct.execute(id);
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
