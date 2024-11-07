const mongoose = require("mongoose"); // requiring mongoose

// connecting to DB (Database)
const connection = mongoose.connect("mongodb://0.0.0.0/men").then(() => {
  console.log("Connected to Database");
});

// exporting connection
module.exports = connection;
