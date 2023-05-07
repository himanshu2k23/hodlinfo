require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const engine = require('ejs-mate');
const homeRoute = require('./routes/homeRoutes');
const axios = require('axios').default;
const Currency = require('./models/currency');
//CONNECTING DATABASE
mongoose.set('strictQuery', false);
console.log(main());
async function main() {
    await mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("DATABASE CONNECTED!!!");
            addDatatoMongoDB()
        })
        .catch(err => {
            console.log("ERROR!!!! DATABASE IS NOT CONNECTED");
            //console.log(err)
        })
}
const addDatatoMongoDB = async (e) => {
    try {
        let result = await axios.get(`https://api.wazirx.com/api/v2/tickers`);
        result = Object.values(result.data);
        await Currency.deleteMany({})
        for (let i = 0; i < 10; i++) {
            const newCurrency = new Currency(result[i]);
            await newCurrency.save();
            //console.log(result[i])   
        }
        console.log("Data updated")
    }
    catch (e) {
        console.log(e);
    }
}

//app.
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extends: true }));
app.use(express.static('./public'));

app.use('/', homeRoute);

//app.LISTEN
app.listen('3001', () => {
    console.log("LISTENING ON PORT 30001");
})