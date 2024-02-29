const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");
const path = require("path");

// To initiate express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: ["http://localhost:3000/", "https://mern-task-app-3h2x.onrender.com"]
}));
app.use("/api/tasks", taskRoutes);



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => console.log(err));

// To connect to mongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Home page");
});

const PORT = process.env.PORT || 5000;
