const express = require('express');

const router = express.Router();

const find = require('../helpers/find');

router.get('/diaries', (req, res)=> {
  if (!req.session.userName) {
    req.session.userName = 'nnn';
  }

  find('userInfo', {userName: req.session.userName}, (result) => {
    "use strict";
    res.json(result[0].diaries);
  });
});

module.exports = router;