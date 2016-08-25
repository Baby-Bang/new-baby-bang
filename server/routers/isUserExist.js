const findUser = require('../dbs/isUserName-db');

const express = require('express');

const router = express.Router();

router.get('/isUserExist', (req, res)=> {
  findUser(req.body, (result)=> {
    if (result.length != 0) {
      req.session.name = result[0].userName;
      req.session.userInfo = result[0].userInfo;
      res.json(true);
    } else {
      res.json(false);
    }
  });
});

module.exports = router;
