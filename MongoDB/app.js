const express = require("express"); //requireing express
const morgan = require("morgan"); // morgan a 3rd party middleware
const app = express(); //assigning express to app
const dbConnection = require("./config/db");
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

// we can use this but the issue is we get see the form data in url and for solving that problem we use .post EX.
// app.get("/get-form-date",(req,res)=>{
//   console.log(req.query); // we can use this for .get
//   res.send('data-received')

// })

// .post how to use
app.post("/get-form-date", (req, res) => {
  console.log(req.body); // for .post we need to use .body and when we use this we get data as undefine so we use built in middleware EX. on top
  res.send("data-received");
});

// on "listning on PORT WHICH IS 3000"
app.listen(PORT);
