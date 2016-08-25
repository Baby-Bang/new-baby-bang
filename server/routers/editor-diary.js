const express = require('express');
const router = express.Router();

const putDiary = require('../dbs/editor-diary-db');
const findBabyBir = require('../helpers/find');

router.post('/diary', (req, res) => {
  "use strict";
  const searchData = {userName: req.session.userName};
  const addData = {$push:{diaries: req.body}};
  putDiary(searchData, addData, (err) => {
    let httpCode = 201;
    if(err) {
      httpCode = 400;
    }
    res.status(httpCode).end();
  });
});

router.get('/babyBir', (req, res) => {
  "use strict";
  findBabyBir('userInfo', {userName: req.session.userName}, (result) => {
    res.json(result[0].babyBir);
  });
});


module.exports = router;