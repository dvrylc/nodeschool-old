function all(promise1, promise2) {
  var promise = new Promise((fulfill, reject) => {
    var counter = 0;
    var values = [];
    
    promise1.then((val) => {
      values[0] = val;
      counter++
      
      if (counter == 2) {
        fulfill(values);
      }
    });
    
    promise2.then((val) => {
      values[1] = val;
      counter++
      
      if (counter == 2) {
        fulfill(values);
      }
    });
  });
  
  return promise;
}

all(getPromise1(), getPromise2()).then(console.log);
