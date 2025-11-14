const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  whatsapp: String,
  country: String,
  phone: String,
  message: String
});

module.exports = mongoose.model("Lead", leadSchema);
