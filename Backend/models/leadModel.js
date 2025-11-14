const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  whatsapp: String,   // used in Demo Form
  country: String,    // used in Demo Form
  phone: String,      // used in Contact Us Form
  message: String     // used in Contact Us Form
});

module.exports = mongoose.model("Lead", leadSchema);
