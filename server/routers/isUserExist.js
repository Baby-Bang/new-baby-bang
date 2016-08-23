const findUser = require('../dbs/isUserName-db');

const express = require('express');

const router = express.Router();

router.get('/isUserExist',(req,res)=>{
    findUser(req.body,(result)=>{
        if(result){
            res.json(true);
        }else{
            res.json(false);
        }
    })
});

module.exports=router;
