const jwt = require("jsonwebtoken");
const { secretKey } = require("../jsonwebtokenConfig");

const authMiddleware = (req, res, next) => {
  // Verificar se o token de autorização está presente no cabeçalho da requisição
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Extrair o token da string de cabeçalho
  const token = authHeader.split(" ")[1];

  try {
    // Verificar e decodificar o token
    const decoded = jwt.verify(token, secretKey);

    // Inserir o ID do usuário autenticado na requisição para uso posterior
    req.userId = decoded.userId;

    // Chamar o próximo middleware ou rota
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;
