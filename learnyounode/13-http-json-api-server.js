var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
  var parsed = url.parse(request.url, true);
  var d = new Date(parsed.query.iso);
  var body = {};
  
  if (parsed.pathname === '/api/parsetime') {
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    
    body = {
      hour: hour,
      minute: minute,
      second: second
    };
  } else if (parsed.pathname === '/api/unixtime') {
    body = {
      unixtime: d.getTime()
    };
  }
  
  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  response.end(JSON.stringify(body));
});
server.listen(process.argv[2]);
