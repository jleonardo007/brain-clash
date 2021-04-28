const { connection } = require("mongoose");

module.exports = (...params) => {
  const [, res, next] = params;
  if (connection.readyState) next();
  else res.status(500).json({ reason: "Database not connected, please try later" });
};
