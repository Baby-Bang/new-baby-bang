const findUser = require('../dbs/login-db');

const express = require('express');

const router = express.Router();

router.post('/sessions',(req,res)=>{
  findUser(req.body,(result)=>{
    if(result){
      res.json(200);
    }else{
      res.json(400);
    }
  })
});

module.exports=router;