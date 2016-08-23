const express = require('express');
const router = express.Router();

const insertDiary = require('../dbs/editor-diary-db');

router.post('/diary', (req, res) => {
  "use strict";
  insertDiary(req.body, (result) => {
    res.status(result).end();
  })
});

module.exports = router;