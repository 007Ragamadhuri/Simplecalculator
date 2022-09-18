const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var ans = n1 + n2;
  res.send("the ansis:" + ans);
});
app.get("/about", function (request, response) {
  response.send("<h1>hi iam hu</h1>");
});
app.listen(3000, function () {
  console.log("server running on port:3000");
});
