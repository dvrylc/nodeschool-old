var promise1 = Promise.resolve('FULFILLED');
promise1.then(console.log);

var promise2 = Promise.reject(new Error('REJECTED'));
promise2.catch((error) => console.log(error.message));
