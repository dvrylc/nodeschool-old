var express = require('express');
var app = express();

app.param('hash', function(req, res, next, value) {
  req.hash = value;
  
  next();
});

app.put('/message/:hash', function(req, res) {
  res.end(
    require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.hash)
      .digest('hex')
  );
});
app.listen(process.argv[2]);
