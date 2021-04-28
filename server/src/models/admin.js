const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  email: String,
  username: String,
  password: String,
  privilege: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("Admin", adminSchema);
