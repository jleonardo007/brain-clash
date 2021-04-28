require("dotenv").config();

module.exports = {
  gmailCredentials: {
    user: process.env.EMAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    resfreshToken: process.env.REFRESH_TOKEN,
  },
  cloudinaryCredentials: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
    folder: process.env.CLOUDINARY_FOLDER,
  },
  jwtSecret: process.env.JWT_SECRET,
  mongodbURL: process.env.MONGODB_URL,
};
