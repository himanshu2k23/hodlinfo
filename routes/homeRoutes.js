const express = require('express');
const router = express.Router();
const Currency = require('../models/currency');

function addCommas(cost) {
  cost = parseInt(cost);
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


router.get('', async (req, res) => {
  const result = await Currency.find({});
  res.render('../views/home.ejs', { result, addCommas, percentageDifference })
})
router.get('/:currency/:inr', async (req, res) => {
  const result = await Currency.find({});
  res.render('../views/home.ejs', { result, addCommas, percentageDifference })
})
module.exports = router;