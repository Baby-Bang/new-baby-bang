const express = require('express');
const router = express.Router();

const putDiary = require('../dbs/editor-diary-db');

router.post('/diary', (req, res) => {
  "use strict";
  req.session.userInfo = {userName: '123', password: '123', diaries: []};
  const searchData = {userName: req.session.userInfo.userName};
  const addData = {$push:{diaries: req.body}};
  putDiary(searchData, addData, (err) => {
    let httpCode = 201;
    if(err) {
      httpCode = 400
    }
    res.status(httpCode).end();
  })
});

router.get('/babyBir', (req, res) => {
  "use strict";
  req.session.userInfo = {userName: '111', password: '111', babyBir: '2016-01-02'};

  res.json(req.session.userInfo.babyBir);
});


module.exports = router;