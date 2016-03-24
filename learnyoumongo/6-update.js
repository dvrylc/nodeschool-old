var mongo = require('mongodb').MongoClient;
var dbName = process.argv[2];
var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, (err, db) => {
  if (err) throw err;
  
  var users = db.collection('users');
  
  users.update({
    username: 'tinatime'
  }, {
    $set: {
      age: 40
    }
  }, (err) => {
    if (err) throw err;
    
    db.close();
  });
});
