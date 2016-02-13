const express = require('express');
const app = express();

app.post('/post', function(req, res) {
  res.send('Got a POST request');
});

var server = module.exports = exports = app.listen(5000, () => console.log('Server started!'));
