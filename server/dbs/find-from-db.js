const find = require('../helpers/find');

function findData(callback) {
  find('hello', {}, callback, 'hello');
}

module.exports = findData;