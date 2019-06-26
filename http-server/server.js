const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //   res.write(`${3 * 7}`);

  if (req.url === "/") {
    res.write("<h1>Welcome to the home page</h1>");
  } else if (req.url === "/team") {
    res.write("Min, Bruno, Svenja");
  } else if (req.url === "/about") {
    res.write("Hello! My name is Montasar!");
  } else {
    res.statusCode = 404;
    res.write("Uh oh... you're not supposed to be here");
  }
  res.end();
});

server.listen(8000);
