var express = require('express');

var app = express ();

app.get('/helloworld', function (req,res) {
  res.send('hello world');
});

app.listen(3000);
