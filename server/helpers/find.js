const url = require('./get-url');
const mongoClient = require('./mongodb');

module.exports = (collect, data, callback) => {
  mongoClient.connect(url, function (err, db) {
    const collection = db.collection(collect);
    collection.find(data).toArray(function (err, result) {
      callback(result[0]);
    });
  });
};