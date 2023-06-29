const express = require("express");
const app = express();
app.use(express.json());

// Importar a configuração do MongoDB
const connectToMongoDB = require("./src/infra/mongoConfig");

// Conectar ao MongoDB
connectToMongoDB();

const routes = require("./src/routes/routes");

app.use(routes);

// Outras configurações e middlewares...

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
