const { urlencoded, json } = require("express");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const controllers = require("../controllers");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, `${new Date().getTime()}${path.extname(file.originalname)}`);
  },
});

module.exports = (app) => {
  // Middlewares
  app.use(cors());
  app.use(urlencoded({ extended: false, limit: "10mb" }));
  app.use(json());
  app.use(morgan("dev"));
  app.use(multer({ storage }).single("avatar"));

  // Load Routes
  app.use("/", controllers());

  // Error handlers
};
