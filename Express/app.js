const express = require("express");
//requireing express

//assigning express to app
const app = express();

//PORT 3000
const PORT = 3000;

app.set("view engine", "ejs");

// on "/" it show Hello word
app.get("/", (req, res) => {
  res.render('index')
});

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
