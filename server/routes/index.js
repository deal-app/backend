const express = require('express')

const restaurant = require('./restaurant')
const mealDeal = require('./mealDeal')

const router = express.Router()

router.use(restaurant)
router.use(mealDeal)

module.exports = router
