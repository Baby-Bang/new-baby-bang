const findUser = require('../dbs/login-db');

const express = require('express');

const router = express.Router();

router.post('/sessions',(req,res)=>{
  findUser(req.body,(result)=>{
    if(result){
      res.status(200).end();
    }else{
      res.status(400).end();
    }
  })
});

module.exports=router;