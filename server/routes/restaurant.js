const express = require('express')
const asyncHandler = require('../helpers/asyncHandler')
const RestaurantRepository = require('../database/repository/restaurantRepository')

const router = express.Router()

router.get(
  '/restaurants',
  asyncHandler(async (req, res) => {
    const restaurants = await RestaurantRepository.fetchAll()

    res.status(200).send({ restaurants: restaurants })
  })
)

router.post(
  '/restaurants',
  asyncHandler(async (req, res) => {
    const { name } = req.body

    await RestaurantRepository.findOrCreate(name)

    res.status(200).send({ code: 'OK', status: 200 })
  })
)

module.exports = router
