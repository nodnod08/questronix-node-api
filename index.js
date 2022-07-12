// modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const errorHandler = require("./config/index");

// initializations, middlewares
dotenv.config();
const app = express();
const PORT = process.env.PORT;

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

//routers
app.use("/api/posts", require("./routers/post"));

app.use(errorHandler);

//connection and server
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true }).then(() => {
  console.log("\n✔️  MONGODB Client is now ready to use");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
