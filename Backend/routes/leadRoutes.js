const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },

    // Popup form
    countryCode: { type: String },
    customCode: { type: String },
    whatsapp: { type: String },

    // Contact Us form
    phone: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
