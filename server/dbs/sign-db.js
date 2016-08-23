const insert = require('../helpers/insert');

function insertUser(data, callback) {
    insert('userInfo', data, callback);
}

module.exports = insertUser;