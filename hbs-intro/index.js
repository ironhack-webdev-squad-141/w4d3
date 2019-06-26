const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

let counter = 0;

app.get("*", (req, res) => {
  counter++;

  res.render("index.hbs", {
    heading: "This is a heading",
    title: "Title of the page",
    randomNumber: Math.random(),
    url: req.url,
    counter,
    moviesList: [..."abcdefghijlkmnopqrstuvwxyz"],
    bool: 1,
    // not undefined, '', 0, false, null, [],
    movie: {
      title: "Titanic",
      director: "James Cameron",
      year: "1997"
    }
  });
});

app.listen(3000);
