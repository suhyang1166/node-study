const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

require("dotenv").config();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", indexRouter);
const mongoURL = MONGODB_URI_PROD;

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(process.env.PORT || 5500, () => {
  console.log("server on 5500");
});
