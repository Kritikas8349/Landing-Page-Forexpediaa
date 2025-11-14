const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const leadRoutes = require("./routes/leadRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/leads", leadRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✔ MongoDB Connected"))
  .catch(err => console.log("❌ Mongo Error:", err));

app.listen(process.env.PORT, () => {
  console.log("✔ Server running on port " + process.env.PORT);
});
