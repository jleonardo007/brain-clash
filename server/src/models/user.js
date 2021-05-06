const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const statisticsSchema = new Schema({
  bestTime: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  winnings: { type: Number, default: 0 },
  defeats: { type: Number, default: 0 },
  hits: { type: Number, default: 0 },
  KO: { type: Number, default: 0 },
  totalGames: { type: Number, default: 0 },
  winningRate: { type: Number, default: 0 },
});

const singlePlayerSchema = new Schema({
  levels: [String],
  badges: [String],
  hasReachedNirvana: { type: Boolean, default: false },
});

const multiplayerSchema = new Schema({
  badges: [String],
});

const metaDataSchema = new Schema({
  signupDate: String,
  signinDate: String,
  logoutDate: String,
});

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  username: String,
  avatar: {
    id: String,
    url: String,
  },
  statistics: { type: statisticsSchema, default: () => ({}) },
  singlePlayer: { type: singlePlayerSchema, default: () => ({}) },
  multiplayer: { type: multiplayerSchema, default: () => ({}) },
  compis: [compiSchema],
  meta: { type: metaDataSchema, default: () => ({}) },
});

userSchema.methods.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);

  return bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model("User", userSchema);
