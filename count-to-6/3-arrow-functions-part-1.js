var inputs = process.argv.slice(2);
var result = inputs
               .map(i => i.charAt(0))
               .reduce((total, current) => total.concat(current));

var output = `[${inputs.toString()}] becomes "${result}"`;
console.log(output);
