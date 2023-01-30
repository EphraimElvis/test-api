const express = require("express");

console.log("Hello World");
const app = express();
const port = 4000;
const onListen = () => {
  const message = `Listening on :${port}`;
  console.log(message);
}
const onHome = (request, response) => {
  response.send("<h1>welcome home</h1>");
}
app.get("/", onHome);
app.listen(port, onListen);