// No arquivo websocketConfig.js
const socketIo = require("socket.io");
let io;

function configureWebSocket(server) {
  io = socketIo(server);

  io.on("connection", (socket) => {
    // Lógica de manipulação de eventos de conexão aqui...
  });

  return io;
}

function getIo() {
  return io;
}

module.exports = {
  configureWebSocket,
  getIo, // Exporte a função getIo para que possa ser acessada em outros lugares do aplicativo.
};
