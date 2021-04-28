const sendEmail = require("../services/emailServices");
const { gmailCredentials } = require("../config/env");
/**
 * !Refresh token expires, unknow causes.
 * TODO: Create email html templates for each email event.
 * TODO: Check if refresh token expires.
 **/

module.exports = (emitter) => {
  emitter.on("user:signup", ({ email, username }) => {
    sendEmail({
      subject: "Brain Clash account has been created",
      html: `
              <h1>Welcome to Brain clash ${username}.</h1> 
              <p>
                I'm Leonardo and i am the creator of Brain Clash, if you has received this email is because surely you're a developer and you found this app in my portfolio page, well Brain Clash is built on MERN stack and implement websockets under the hood so you can play with another users, said that take a look in and have fun, if you're not a dev, have fun too!
              </p>
              <p>PD: This is a non profit app so don't worry, i'm not gonna try to sell something or spam you!</p>
      `,
      to: email,
      from: ` "Leonardo Bravo" ${gmailCredentials.user}`,
    });
  });

  emitter.on("user:signin", () => {});

  emitter.on("user:delete-acount", () => {});
};
