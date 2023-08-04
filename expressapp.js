#express.js
var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.send("Welocme to express!");
});
app.listen(5000);
