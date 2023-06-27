const express = require("express");
const app = express();

const routes = require("./src/routes/routes");

app.use(routes);

// Outras configurações e middlewares...

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
