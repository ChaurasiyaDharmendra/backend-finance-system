require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/users", require("./routes/userRoutes"));
app.use("/transactions", require("./routes/transactionRoutes"));
app.use("/dashboard", require("./routes/dashboardRoutes"));

// Default Route (test ke liye)
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});