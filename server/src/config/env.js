require("dotenv").config();

module.exports = {
  gmailCredentials: {
    user: process.env.EMAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    resfreshToken: process.env.REFRESH_TOKEN,
  },
  jwtSecret: process.env.JWT_SECRET,
  mongodbURL: process.env.MONGODB_URL,
};
