const express = require('express')
const asyncHandler = require('../helpers/asyncHandler')
const MealDealRepository = require('../database/repository/mealDealRepository')

const router = express.Router()

router.get(
    '/meal-deals/:restaurantID',
    asyncHandler(async (req, res) => {
        const restaurantID = Number(req.params.restaurantID)

        const mealDeals = await MealDealRepository.fetchByRestaurantID(restaurantID)

        res.status(200).send({ mealDeals: mealDeals })
    })
)

router.post(
    '/meal-deals',
    asyncHandler(async (req, res) => {
        const name = req.body.name
        const image = req.body.image
        const description = req.body.description
        const price = req.body.price
        const restaurantID = req.body.restaurantID

        await MealDealRepository.findOrCreate(name, image, description, price, restaurantID)

        res.status(200).send({ code: 'OK', status: 200 })
    })
)

module.exports = router

