const express = require("express");
const app = express();

// const app = require("express")();

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("access to /");
  res.send(`
  <h1>Hello World!</h1>
    <a href="/desert">Click to see a desert</a>
  `);
});

app.get("/about", (req, res) => {
  res.send("Welcome to my website");
});

app.get("/desert", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/views/desert-page.html");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000);
