const express = require("express"),
  path = require("path")




const app = express();
const PORT = process.env.PORT || 3000;


app.set("view engine", "ejs");

app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.render("landing");
})



app.get("/login", (req, res) => {
  res.render("login");
})

app.get("/register", (req, res) => {
  res.render("register");
})

app.get("/about", (req, res) => {
  res.render("about");
})


app.post("/search", (req, res) => {
  res.render("search");
})







app.listen(PORT, console.log(`Server running on PORT ${PORT}`))