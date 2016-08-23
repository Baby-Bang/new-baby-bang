const express = require('express');

const router = express.Router();

router.get('/sessions/user',(req,res)=>{
  req.session.userName = 'zxw';
  res.json(req.session.userName);
});

module.exports=router;