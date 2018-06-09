const express = require("express");
const http = require("http");
const app = require("./api/app");

app.use(express.static(__dirname + "/build/"));
app.listen(process.env.PORT || 3000);

const server = http.createServer(app);
const port = process.env.PORT || 3021;
server.listen(port, function() {
  console.log("Express server listening on port " + port);
});
