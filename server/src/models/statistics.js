const { Schema, model } = require("mongoose");

const statisticsSchema = new Schema({
  totalUsers: Number,
  activeUsers: Number,
  activeGames: Number,
  desactiveAccounts: Number,
});

module.exports = model("Statistics", statisticsSchema);
