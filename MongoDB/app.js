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

//CRUD Oprations
// 1. Create
// so we use async await
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = await userModel.create({
    // creating users
    username: username,
    email: email,
    password: password,
  });
  res.send(newUser); //logging the user on route after user created
});

// 2. Read
app.get("/get-users", (req, res) => {
  // userModel
  //   .find({  // find always return an array if there be no match condition and without condition it return all user and for a specific user u can give condition and use methords of array as it make all in form as array of objects.
  //     username: "b",
  //   })
  //   .then((users) => {
  //     res.send(users);
  //   });
  userModel
    .findOne({
      // if there be no match user it return null and loading be white when you give condition it only return the first created person data  and if you dont give condition it return first data from Database
      username: "b",
    })
    .then((users) => {
      res.send(users);
    });
});

// 3. Update
app.get("/update-user", async (req, res) => {
  // defining route
  await userModel.findOneAndUpdate(
    // giving a method findone and update for updating  which get two object one for finding the one which you wanna update  and another what you want to update as in mine condition changing email from a@a.com to c@c.com
    {
      username: "a",
    },
    {
      email: "c@c.com",
    }
  );
  //logging the user updated after it dont
  res.send("user Updated");
});

// 4. Delete
app.get("/delete-user", async (req, res) => {
  await userModel.findOneAndDelete({ username: "a" }); // it delete that which id or name you give in condition
  res.send("User Deleted");
});

app.post("/get-form-date", (req, res) => {
  console.log(req.body);
  res.send("data-received");
});

app.listen(PORT);
