var fs = require('fs');

function count(err, str) {
  if (!err) {
    console.log(str.split('\n').length - 1);
  } else {
    throw err;
  }
}

fs.readFile(process.argv[2], 'utf8', count);
