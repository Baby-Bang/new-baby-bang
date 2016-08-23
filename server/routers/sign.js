const insertUser = require('../dbs/sign-db');

const express = require('express');

const router = express.Router();

router.post('/session',(req,res)=>{
    insertUser(req.body, (err) => {
      let httpCode = 201;
      if(err) {
        httpCode = 400
      }
      res.status(httpCode).end();
    });
});

module.exports=router;
