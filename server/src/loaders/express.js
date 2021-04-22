const { urlencoded, json } = require("express");
const cors = require("cors");
const morgan = require("morgan");

module.exports = (app) => {
  // Middlewares
  app.use(cors());
  app.use(urlencoded({ extended: false, limit: "10mb" }));
  app.use(json());
  app.use(morgan("dev"));

  // Load Routes

  // Error handlers
};
