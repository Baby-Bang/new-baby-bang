const findUser = require('../dbs/login-db');

const express = require('express');

const router = express.Router();

router.post('/sessions',(req,res)=>{
  findUser({userName: req.body.userName, password: req.body.password},(result)=>{
    if(result.length != 0){
      req.session.name = result[0].userName;
      res.status(200).end();
    }else{
      res.status(403).end();
    }
  })
});

module.exports=router;