var http = require('q-io/http');

var promise = http.read('http://localhost:1337')
  .then((data) => console.log(JSON.parse(data)))
  .catch(console.error);
