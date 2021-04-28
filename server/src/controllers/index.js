const { Router } = require("express");
const authController = require("./authControllers");

module.exports = () => {
  const router = Router();

  authController(router);
  console.log("Routes loaded");

  return router;
};
