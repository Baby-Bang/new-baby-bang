const insert = require('../helpers/insert');

const insertUser = (data, callback) => {
  insert('userInfo', data, callback);
};

module.exports = insertUser;