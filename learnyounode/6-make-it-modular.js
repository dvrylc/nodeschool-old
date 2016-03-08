var readfilter = require('./6-make-it-modular-readfilter');

readfilter(process.argv[2], process.argv[3], output);

function output(err, list) {
  if (err) {
    console.log("There was an error: " + err);
  }
  
  list.forEach(function(file) {
    console.log(file);
  });
}
