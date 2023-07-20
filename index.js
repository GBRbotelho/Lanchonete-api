const express = require("express");
const app = express();
app.use(express.json());
const server = app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

// Importar a configuração do MongoDB
const connectToMongoDB = require("./src/infra/mongoConfig");

// Conectar ao MongoDB
connectToMongoDB();

const routes = require("./src/routes/routes");

app.use(routes);

// Importação do Socket.io
const { configureWebSocket } = require("./src/infra/websocketConfig");
const io = configureWebSocket(server);
// Outras configurações e middlewares...
