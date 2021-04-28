const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/env");
const { verifyEmail, signup, verifyPassword } = require("../middlewares/auth");
const { getAuthenticatedUser, logout } = require("../services/authServices");

module.exports = (router) => {
  router.post("/users/signup", verifyEmail, signup, async (req, res) => {
    try {
      const user = await getAuthenticatedUser(req.body);
      const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "24h" });

      res.json({
        user,
        token,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send("A problem has occur while server get your account info, please try again!");
    }
  });

  router.post("/users/signin", verifyPassword, async (req, res) => {
    try {
      const user = await getAuthenticatedUser(req.body);
      const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "24h" });
      res.json({
        user,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("A problem has occur while sign in , try again!");
    }
  });

  router.get("/users/logout", (req, res) => {
    logout();
  });
};
