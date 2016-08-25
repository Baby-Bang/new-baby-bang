const find = require('../helpers/find');

function findUser(data, callback) {
  find('userInfo', data, callback);
}

module.exports = findUser;