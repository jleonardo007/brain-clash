const { Schema, model } = require("mongoose");

const rankingSchema = new Schema({
  pointsRank: [
    {
      id: String,
      username: String,
      points: Number,
    },
  ],
  timeRank: [
    {
      id: String,
      username: String,
      time: Number,
    },
  ],
  victoriesRank: [
    {
      id: String,
      username: String,
      victories: Number,
    },
  ],
  hitsRank: [
    {
      id: String,
      username: String,
      hits: Number,
    },
  ],
  KORank: [
    {
      id: String,
      username: String,
      KO: Number,
    },
  ],
  victoriesAndDefeatsRateRank: [
    {
      id: String,
      username: String,
      victoriesAndDefeatsRate: Number,
    },
  ],
});

module.exports = model("Ranking", rankingSchema);
