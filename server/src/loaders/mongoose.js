const mongoose = require("mongoose");
const { mongodbURL } = require("../config/env");

module.exports = async () => {
  const connection = mongoose.connection;

  connection.on("open", () => {
    console.log("Database is connected");
  });

  connection.on("error", (error) => {
    console.log(error);
  });

  await mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};
