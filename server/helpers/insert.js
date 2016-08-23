const url = require('./get-url');
const mongoClient = require('./mongodb');

module.exports = (collect, data, callback) => {
  if (callback) {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection(collect);
      collection.insertOne(data, (err, result)=> {
        callback(err);
      });
      db.close();
    });
  } else {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection(collect);
      collection.insertOne(data);
      db.close();
    });
  }
};