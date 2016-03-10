var http = require('http');
var bl = require('bl');

var result = [];
var count = 0;

for (var i = 0; i < 3; i++) {
  httpGet(i);
}

function httpGet(i) {
  http.get(process.argv[i + 2], function(response) {
    response.pipe(bl(function(err, data) {
      if (err) {
        return console.error(err);
      }
      
      result[i] = data.toString();
      count++;
      
      if (count === 3) {
        result.forEach(function(el) {
          console.log(el);
        });
      }
    }));
  });
}
