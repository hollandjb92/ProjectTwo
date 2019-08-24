require('dotenv').config()

const express = require("express"),
  path = require("path"),
  axios = require("axios");




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
  let query = req.body.gameSearch;


  console.log(query);

  axios.get("http://www.giantbomb.com/api/search?api_key=" + process.env.APIKEY + "&format=json&query=" + query + "[YOUR-SEARCH]&resources=game")

    .then(response => {
      // console.log(response.data.results[0, 1])
      console.log(response.data.results[0].id);

      res.render("search", {
        response
      });
    })
})

app.get("/show/:id", (req, res) => {
  let gameID = req.params.id;

  axios.get("http://www.giantbomb.com/api/game/" + gameID + "/?api_key=" + process.env.APIKEY + "&format=json")

    .then(response => {


      res.render("show", {
        response
      })
    })


})






app.listen(PORT, console.log(`Server running on PORT ${PORT}`))