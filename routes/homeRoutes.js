const express = require('express');
const router = express.Router();
const Currency = require('../models/currency');

function addCommas(cost) {
  cost = parseInt(cost);
  console.log(cost)
  let options = {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }
  let costWithCommas = cost.toLocaleString('en-US', options);
  return (costWithCommas);
}

const percentageDifference = (newValue, oldValue) => {
  let percentageDifference = (((newValue - oldValue) / 2518000) * 100).toFixed(2);
  return (percentageDifference);
}


router.get('/', async (req, res) => {
  res.redirect('/BTC/INR');
})
router.get('/:currency/:inr', async (req, res) => {
  const result = await Currency.find({});
  console.log(result[0])
  const name = `${req.params.currency}/INR`
  const optedCurrency= await Currency.findOne({name});
  console.log(optedCurrency);
  res.render('../views/home.ejs', { result,optedCurrency, addCommas, percentageDifference })
})
module.exports = router;