const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const leadRoutes = require("./routes/leadRoutes");

require("dotenv").config(); // ← Gives you access to .env file

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.log("DB Error:", err));

// Routes
app.use("/api/leads", leadRoutes);

app.listen(5000, () => console.log("Server Running on Port 5000"));
