require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const engine = require('ejs-mate');
//CONNECTING DATABASE
mongoose.set('strictQuery', false);
console.log(main());
async function main() {
    await mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("DATABASE CONNECTED!!!");
        })
        .catch(err => {
            console.log("ERROR!!!! DATABASE IS NOT CONNECTED");
            //console.log(err)
        })
}

const addDatatoMongoDB=()=>{
    
}
//app.
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extends: true }));
app.use(express.static('./public'));