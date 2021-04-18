const express = require("express");
const app = express();
const morgan = require("morgan");
require("./db/db");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
  res.status(200).json({
    message: "Hello",
  });
});

module.exports = app;
