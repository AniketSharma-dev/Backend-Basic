const mongoose = require("mongoose"); // requiring mongoose


// creating schema for model
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


//modeling the schema in user
const userModel = mongoose.model("user", userSchema);


//exporting userModel
module.exports = userModel;
