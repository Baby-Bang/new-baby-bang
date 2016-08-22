const url = require('./get-url');
const mongoClient = require('./mongodb');

module.exports = (collect) => {
  mongoClient.connect(url, (err, db)=> {
    const collection = db.collection(collect);
    collection.removeMany({});
    db.close();
  });
};
