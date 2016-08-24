const url = require('./get-url');
const mongoClient = require('./mongodb');

module.exports = (collect, searchData, addData, callback) => {
  if (callback) {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection(collect);
      collection.update(searchData, addData, (err, result)=> {
        callback(err);
      });
      db.close();
    });
  } else {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection(collect);
      collection.update(searchData, addDate);
      db.close();
    });
  }
};