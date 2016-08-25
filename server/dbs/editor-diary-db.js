const put = require('../helpers/put');

module.exports = (searchData, addData, callback) => {
  "use strict";
  put('userInfo', searchData, addData, callback);

};