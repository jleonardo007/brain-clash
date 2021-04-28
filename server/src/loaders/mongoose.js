const mongoose = require("mongoose");
const { mongodbURL } = require("../config/env");

module.exports = async () => {
  const connection = mongoose.connection;

  try {
    connection.on("open", () => {
      console.log("Database is connected");
    });

    connection.on("reconnected", () => {
      console.log("Database has been reconected");
    });

    connection.on("disconnected", () => {
      console.log("Database disconnected");
    });

    await mongoose.connect(mongodbURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};
