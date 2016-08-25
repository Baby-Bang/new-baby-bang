const express = require('express');

const router = express.Router();

const find = require('../helpers/find');

router.get('/diaries', (req, res)=> {
  find('userInfo', {userName: req.session.userName}, (result) => {
    "use strict";
    if(result.length != 0) {
      res.json(result[0].diaries);
    } else {
      res.json([]);
    }
  });
});

module.exports = router;