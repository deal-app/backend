const {MealDealModel} = require('../model/mealDeal')

// find all the restaurants by specifying the restaurant id
async function fetchByRestaurantID(restaurantID){
    const restaurants = await MealDealModel.find({ restaurantID: restaurantID })

    return restaurants
}

// creates a new meal deal document if such one doesn't exist yet
async function findOrCreate(name, image, description, price, restaurantID){
    const mealDeal = await MealDealModel.findOneAndUpdate(
        { name: name, image: image, description: description, price: price, restaurantID: restaurantID },
        { $setOnInsert: { name: name, image: image, description: description, price: price, restaurantID: restaurantID } },
        { new: true, upsert: true }
    )

    return mealDeal
}

module.exports = {fetchByRestaurantID, findOrCreate}


