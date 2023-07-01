const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    default: null,
  },
  document: {
    type: String,
    required: false,
    default: null,
  },
  phone: {
    type: String,
    required: false,
    default: null,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
