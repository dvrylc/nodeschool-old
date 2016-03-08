var http = require('http');

http.get(process.argv[2], collect);

function collect(response) {
  response.setEncoding('utf8');
  
  var store = "";
  
  response.on('data', function(data) {
    store += data
  });
  response.on('end', function() {
    console.log(store.length);
    console.log(store);
  })
}
