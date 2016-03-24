var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, (err, db) => {
  if (err) throw err;
  
  var parrots = db.collection('parrots');
  
  parrots.find({
    age: { $gt: parseInt(process.argv[2]) }
  }).toArray((err, results) => {
    if (err) throw err;
    
    console.log(results);
    db.close();
  });
});
