var http = require('http');
var concatStream = require('concat-stream');

http.get(process.argv[2], collect);

function collect(response) {
  var store = concatStream(function(data) {
    data = data.toString();
    
    console.log(data.length);
    console.log(data);
  });
  
  response.pipe(store);
}
