function parsedPromised(json) {
  var promise = new Promise((fulfill, reject) => {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
  
  return promise;
}

parsedPromised(process.argv[2]).then(null, console.log);
