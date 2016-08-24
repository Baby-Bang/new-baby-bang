const express = require('express');

const router = express.Router();

router.get('/sessions/user',(req,res)=>{
  if(req.session.userName) {
    res.json(req.session.userName);
  } else {
    req.session.userName = '';
    res.json(req.session.userName);
  }
});

module.exports=router;