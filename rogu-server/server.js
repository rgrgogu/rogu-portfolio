const dotenv = require('dotenv')
const cors = require("cors");
const colors = require("colors");
const express = require("express");
const projRoutes = require("./src/routes/Projects");
const inquiryRoutes = require("./src/routes/Inquiry");
const connectDB = require("./src/config/DB");
dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/projects", projRoutes);
app.use("/api/inquiry", inquiryRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Rogu's Porfolio API",
    usage: [
      "GET /api/projects to look at my past projects",
      "GET /api/inquiry to look at my inquiries",
    ],
  });
});

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
