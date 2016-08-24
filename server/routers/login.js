const findUser = require('../dbs/login-db');

const express = require('express');

const router = express.Router();

router.post('/sessions',(req,res)=>{
  findUser(req.body,(result)=>{
    if(result.length != 0){
      req.session.userName = result[0].userName;
      res.status(200).end();
    }else{
      res.status(403).end();
    }
  });
});

module.exports=router;