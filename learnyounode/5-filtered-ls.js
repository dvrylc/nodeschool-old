var fs = require('fs');
var path = require('path');

function filter(err, list) {
  if (!err) {
    list.forEach(function(file) {
      if (path.extname(file) === "." + process.argv[3]) {
        console.log(file);
      }
    });
  } else {
    throw err;
  }
}

fs.readdir(process.argv[2], filter);
