const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/players", (req, res) => {
  res.render("players");
});

app.get("/teams", (req, res) => {
  //   res.render("teams", { layout: false });
  res.render("teams");
});

app.listen(3000);
