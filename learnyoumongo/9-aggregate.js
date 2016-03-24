var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
  if (err) throw err;
  
  var prices = db.collection('prices');
  
  prices.aggregate([
    { $match: { size: process.argv[2] } },
    { $group: {
      _id: 'total',
      total: {
        $avg: '$price'
      }
    }}
  ]).toArray((err, results) => {
    if (err) throw err;
    
    if (results.length === 0) {
      throw new Error('No results found');
    }
    
    console.log(results[0].total.toFixed(2));
    db.close();
  });
});
