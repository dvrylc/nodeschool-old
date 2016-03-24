var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
  if (err) throw err;
  
  var docs = db.collection('docs');
  
  var newDoc = {
    firstName: process.argv[2],
    lastName: process.argv[3]
  }
  
  docs.insert(newDoc, (err, data) => {
    if (err) throw err;
    
    console.log(JSON.stringify(newDoc));
    db.close();
  });
});
