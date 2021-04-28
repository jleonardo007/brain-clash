const express = require("express");
const PORT = process.env.PORT || 5000;
const loaders = require("./loaders");

async function startSever() {
  const app = express();

  app.on("error", (err) => {
    console.log(err);
  });

  await loaders(app);

  app.listen(PORT, () => {
    console.log(`Brain Clash server running on PORT=${PORT}`);
  });
}

startSever();
