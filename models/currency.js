const mongoose = require('mongoose');

const currencySchema= new mongoose.Schema({
    name:String,
    last:String,
    buy:String,
    sell:String,
    volume:String,
    base_unit:String
})

module.exports = mongoose.model('Currency',currencySchema);