const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Settings
app.set("port", process.env.PORT || 5000);

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false, limit: "10mb" }));
app.use(express.json());
app.use(morgan("dev"));

// Routes

module.exports = app;
