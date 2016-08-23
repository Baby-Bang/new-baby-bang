const insertUser = require('../dbs/sign-db');

const express = require('express');

const router = express.Router();

router.post('/session',(req,res)=>{
    insertUser(req.body, (httCode) => {
        res.status(httCode).end();
    });
});

module.exports=router;
