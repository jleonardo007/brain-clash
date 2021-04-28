const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { gmailCredentials } = require("../config/env");
const OAuth2 = google.auth.OAuth2;

const createTransporter = () => {
  try {
    const oauth2Client = new OAuth2(
      gmailCredentials.clientId,
      gmailCredentials.clientSecret,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: gmailCredentials.resfreshToken,
    });

    const accessToken = oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: gmailCredentials.user,
        clientId: gmailCredentials.clientId,
        clientSecret: gmailCredentials.clientSecret,
        refreshToken: gmailCredentials.resfreshToken,
        accessToken,
      },
    });

    return transporter;
  } catch (error) {
    console.log(error);
  }
};

const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
};

module.exports = sendEmail;
