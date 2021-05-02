const cloudinary = require("cloudinary");
const { cloudinaryCredentials } = require("../config/env");

cloudinary.v2.config({
  cloud_name: cloudinaryCredentials.cloudName,
  api_key: cloudinaryCredentials.apiKey,
  api_secret: cloudinaryCredentials.apiSecret,
});

async function uploadAvatar(file) {
  if (file)
    return cloudinary.v2.uploader.upload(file.path, { folder: cloudinaryCredentials.folder });
  else return "";
}

function updateAvatar() {}

function deleteAvatar() {}

module.exports = {
  uploadAvatar,
  updateAvatar,
  deleteAvatar,
};
