var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.redirect('https://google.it');
});

app.listen(3000, function () {
  console.log('TestRedirect app listening on port 3000!');
});
