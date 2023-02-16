const express = require('express')

const restaurant = require('./restaurant')

const router = express.Router()

router.use(restaurant)

module.exports = router
