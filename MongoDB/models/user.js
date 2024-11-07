const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // you can give other property like this
  //   age: Number,
  //   gender: {
  //     type: String,
  //     enum: ["male", "female"],
  //   },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
