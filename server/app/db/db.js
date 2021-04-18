const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1:27017/challenge-db";
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to database"))
  .catch(console.log("Connection error"));
