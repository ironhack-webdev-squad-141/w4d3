/*
const express = require('express')
const app = express()
*/

const app = require("express")();

app.get("/", (req, res) => {
  console.log("access to /");
  res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
  res.send("Welcome to my website");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000);
