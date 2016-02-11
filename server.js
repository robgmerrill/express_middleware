const express = require('express');
const app = express();
const jsonParser = require(__dirname + '/lib/json_parser');

app.post('/jsonSend', jsonParser, (req, res) => {
    res.json(req.body);
    res.end();
  });

var server = module.exports = exports = app.listen(3000, () => console.log('Server started on port 3000'));
