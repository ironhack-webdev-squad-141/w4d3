const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index.hbs", {
    heading: "This is a heading",
    title: "Title of the page"
  });
});

app.listen(3000);
