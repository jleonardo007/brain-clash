const expressLoader = require("./express");
const mongooseLoader = require("./mongoose");

module.exports = async (app) => {
  console.log("Init server loaders...");

  await mongooseLoader();
  expressLoader(app);
};
