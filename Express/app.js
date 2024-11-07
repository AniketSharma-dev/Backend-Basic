const express = require("express");
const morgan = require("morgan"); // morgan a 3rd party middleware 
//requireing express

//assigning express to app
const app = express();

//PORT 3000
const PORT = 3000;

app.use(morgan("dev"));

app.set("view engine", "ejs");

//middleware this is an custom middleware which can can be set for particular route also
// app.use((req, res, next) => {
//   console.log("This is Middleware");
//   const a = 2;
//   const b = 3;
//   console.log(a + b);

//   return next();  // always always you need to return next() else it dont go next place
// });

// Example here

// on "/" it show Hello word
app.get(
  "/",
  (req, res, next) => {
    const a = 2;
    const b = 3;
    console.log(a + b);

    return next();
  },
  (req, res) => {
    res.render("index");
  }
);

// on "/about" it show About Page
app.get("/about", (req, res) => {
  res.send("About Page");
});

// on "/profile" it show Profile Page
app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

// on "listning on PORT WHICH IS 3000"
app.listen(PORT);
