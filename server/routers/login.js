const findUser = require('../dbs/login-db');

const express = require('express');

const router = express.Router();

router.post('/sessions',(req,res)=>{
  findUser(req.body,(result)=>{
    if(result.length != 0){
      req.session.userName = result[0].userName;
      req.session.userInfo = result[0].userInfo;
      res.status(200).end();
    }else{
      res.status(403).end();
    }
  })
});

module.exports=router;