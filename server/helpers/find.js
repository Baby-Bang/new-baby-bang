const url = require('./get-url');
const mongoClient = require('./mongodb');

module.exports = (collect, data, callback, key) => {
  if (key) {
    mongoClient.connect(url, (err, db) => {
      const collection = db.collection(collect);
      collection.find(data).toArray((err, result) => {
        callback(result[0][key]);
      });
    });
  } else {
    mongoClient.connect(url, (err, db) => {
      const collection = db.collection(collect);
      collection.find(data).toArray((err, result) => {
        callback(result);
      });
    });
  }
};