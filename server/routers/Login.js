const findUser = require('../dbs/login-db');

const express = require('express');

const router = express.Router();

router.post('/sessions',(req,res)=>{
  findUser(req.body,(result)=>{
    if(result.length != 0){
      req.session.name = result[0].userName;
      req.session.userInfo = result[0].userInfo;
      res.json(200);
    }else{
      res.status(403).end();
      // res.json(400);
    }
  })
});

module.exports=router;