const express = require('express');
const router = express.Router();
const Currency = require('../models/currency');

router.get('',async (req,res)=>{
    const result= await Currency.find({});
    res.render('../views/home.ejs',{result})
})

module.exports=router;