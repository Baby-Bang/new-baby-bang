const url = require('./get-url');
const mongoClient = require('./mongodb');

module.exports = (collect, data) => {
  mongoClient.connect(url, (err, db)=> {
    const collection = db.collection(collect);
    collection.insert([data], (err, result)=> {
    });
    db.close();
  });
};