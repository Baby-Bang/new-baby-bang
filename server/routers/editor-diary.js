const express = require('express');
const router = express.Router();

const insertDiary = require('../dbs/editor-diary-db');

router.post('/diary', (req, res) => {
  "use strict";
  insertDiary(req.body, (err) => {
    let httpCode = 201;
    if(err) {
      httpCode = 400
    }
    res.status(httpCode).end();
  })
});

module.exports = router;