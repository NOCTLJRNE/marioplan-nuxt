var express = require("express");
var app = express();
var httpProxy = require("http-proxy");
var apiProxy = httpProxy.createProxyServer();
var serverOne = "http://localhost:3000";
const PORT = process.env.PORT;
app.all("/*", function(req, res) {
  apiProxy.web(req, res, { target: serverOne });
});
app.listen(PORT);
