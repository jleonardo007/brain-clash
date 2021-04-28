const expressLoader = require("./express");
const mongooseLoader = require("./mongoose");
const { loadSubscribers } = require("../subscribers");

module.exports = async (app) => {
  console.log("Init server loaders...");

  await mongooseLoader();
  expressLoader(app);
  loadSubscribers();
};
