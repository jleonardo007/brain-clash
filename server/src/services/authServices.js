const User = require("../models/user");

async function saveUser({ email, username, password, ...meta }, { public_id, secure_url }) {
  const user = new User({
    email,
    username,
    password,
    avatar: {
      id: public_id,
      url: secure_url,
    },
    meta,
  });

  user.password = await user.encryptPassword(password);
  return user.save();
}

async function getAuthenticatedUser({ email }) {
  return User.findOne({ email }, { password: 0 });
}

function logout() {
  console.log("logout");
}

module.exports = {
  saveUser,
  getAuthenticatedUser,
  logout,
};
