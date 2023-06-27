const Product = require("../entities/Product");

// GET /products
const getAllProducts = (req, res) => {
  // Obtenha todos os produtos do banco de dados ou de uma fonte de dados externa
  const products = []; // Substitua com a lógica adequada para obter os produtos

  res.json(products);
};

// GET /products/:id
const getProductById = (req, res) => {
  const productId = req.params.id;
  // Obtenha o produto pelo ID do banco de dados ou de uma fonte de dados externa
  const product = null; // Substitua com a lógica adequada para obter o produto

  if (!product) {
    res.status(404).json({ error: "Produto não encontrado" });
  } else {
    res.json(product);
  }
};

// POST /products
const createProduct = (req, res) => {
  const { name, price, description } = req.body;

  // Valide os dados recebidos

  // Crie uma nova instância do produto
  const product = new Product({
    name,
    price,
    description,
  });

  // Salve o produto no banco de dados ou em uma fonte de dados externa

  res.status(201).json(product);
};

// PUT /products/:id
const updateProduct = (req, res) => {
  const productId = req.params.id;
  const { name, price, description } = req.body;

  // Valide os dados recebidos

  // Atualize o produto no banco de dados ou em uma fonte de dados externa

  // Verifique se o produto foi atualizado com sucesso

  if (!product) {
    res.status(404).json({ error: "Produto não encontrado" });
  } else {
    res.json(product);
  }
};

// DELETE /products/:id
const deleteProduct = (req, res) => {
  const productId = req.params.id;

  // Exclua o produto do banco de dados ou de uma fonte de dados externa

  res.status(204).send();
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
