var http = require('http');
var bl = require('bl');

http.get(process.argv[2], collect);

function collect(response) {
  var store = bl(function(err, data) {
    if (err) {
      return console.error(err);
    }
    
    data = data.toString();
    
    console.log(data.length);
    console.log(data);
  });
  
  response.pipe(store);
}
