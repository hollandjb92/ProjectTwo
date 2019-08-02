const express = require("express"),
  path = require("path")




const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.render("landing");
})

app.set("view engine", "ejs");















app.listen(PORT, console.log(`Server running on PORT ${PORT}`))