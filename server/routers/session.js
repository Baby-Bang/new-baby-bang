const express = require('express');

const router = express.Router();

router.get('/sessions/user', (req, res)=> {
  res.json(req.session.userName || '');
});

router.delete('/sessions', (req, res)=> {
  req.session.userName = '';
  res.json(req.session.userName);
});

module.exports = router;