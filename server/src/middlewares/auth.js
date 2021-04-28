const fs = require("fs/promises");
const { saveUser } = require("../services/authServices");
const { uploadAvatar } = require("../services/avatarServices");
const { emitter } = require("../subscribers");
const User = require("../models/user");

async function verifyEmail(req, res, next) {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    await fs.unlink(req.file.path);
    res.status(401).json({ reason: "email is already in use" });
  } else next();
}

async function signup(req, res, next) {
  try {
    const avatar = await uploadAvatar(req.file);
    const user = await saveUser(req.body, avatar);
    emitter.emit("user:signup", user);
    await fs.unlink(req.file.path);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      reason: "A problem has occur while server register your account, please try again!",
    });
  }
}

async function verifyPassword(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });
    const isValidPassword = await user.comparePassword(req.body.password);

    if (isValidPassword) next();
    else res.status(401).json({ reason: "Wrong password" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ reason: "User doesn't exist! please register an account" });
  }
}

module.exports = {
  verifyEmail,
  signup,
  verifyPassword,
};
