const find = require('../helpers/find');

function findData(callback) {
  find('hello', {}, callback);
}

module.exports = findData;