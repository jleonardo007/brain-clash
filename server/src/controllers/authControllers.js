const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/env");
const { verifyEmail, signup, verifyPassword } = require("../middlewares/auth");
const verifyDatabaseConnection = require("../middlewares/verifyDatabaseConnection");
const { getUser } = require("../services/authServices");

module.exports = (router) => {
  router.post("/users/signup", verifyDatabaseConnection, verifyEmail, signup, async (req, res) => {
    try {
      const user = await getUser(req.body);
      const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "24h" });

      res.json({
        user,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        reason: "A problem has occur while server register your account, please try again!",
      });
    }
  });

  router.post("/users/signin", verifyDatabaseConnection, verifyPassword, async (req, res) => {
    try {
      const user = await getUser(req.body);
      const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "24h" });
      res.json({
        user,
        token,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ reason: "A problem has occur while server get your account info , try again!" });
    }
  });
};
