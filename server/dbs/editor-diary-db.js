const insert = require('../helpers/insert');

module.exports = (data, callback) => {
  "use strict";
  insert('userInfo',data, callback);
}