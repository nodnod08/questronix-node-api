// modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

// initializations, middlewares
dotenv.config();
const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "HEAD, OPTIONS, GET, POST, PUT, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true }).then(() => {
  console.log("\n✔️  MONGODB Client is now ready to use");

  const app = express();
  app.listen(5000, () => {
    console.log("Server has started!");
  });
});
