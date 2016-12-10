var express = require('express');
var app = express();

app.get('/api/test', function (req, res) {
  res.json({success: true})
})

app.get('*', function (req, res) {
  console.log(req.url)
  res.status(404).json({error: 'resource not found'})
});

app.listen(3001, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Server listening at http://localhost:3001/');
});
