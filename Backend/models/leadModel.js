const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  whatsapp: String,
  countryCode: String,
  customCode: String,
  phone: String,
  message: String
});

module.exports = mongoose.model("Lead", leadSchema);
