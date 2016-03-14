var numbers = process.argv.slice(2);
console.log(`The minimum of [${numbers.toString()}] is ${Math.min(...numbers)}`);
