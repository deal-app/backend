const { RestaurantModel } =  require('../model/restaurant')

async function fetchAll() {
  const restaurants = await RestaurantModel.find()

  return restaurants
}

async function findOrCreate(name) {
  const restaurant = await RestaurantModel.findOneAndUpdate(
    { name: name },
    { $setOnInsert: { name: name } },
    { new: true, upsert: true }
  )

  return restaurant
}

module.exports = { fetchAll, findOrCreate }
