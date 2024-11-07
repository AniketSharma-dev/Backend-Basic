const express = require("express"); //requireing express
const morgan = require("morgan"); // morgan a 3rd party middleware
const app = express(); //assigning express to app
const dbConnection = require("./config/db"); // importing db connection
const userModel = require("./models/user"); //importing user model

const PORT = 3000; //PORT 3000

//middelware for getting post data from body "By default it return undefine"
//this are built in middle ware we use for getting data from req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// for showing css on front end
app.use(express.static("public"));

app.use(morgan("dev"));

app.set("view engine", "ejs");

// on "/" it show Hello word
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

//this is asynchronous code and this not gonna run till the user not created and it get in queue.
// app.post("/register", (req, res) => {
//   const { username, email, password } = req.body;
//   userModel.create({
//     username: username,
//     email: email,
//     password: password,
//   }); // so this code get in Q
//   res.send("User Register"); // and this line executed which give error bc we dont know whenuser register
// });

// so we use async await
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
 const newUser = await userModel.create({
    username: username,
    email: email,
    password: password,
  });
  res.send(newUser);
});

app.post("/get-form-date", (req, res) => {
  console.log(req.body);
  res.send("data-received");
});

app.listen(PORT);
