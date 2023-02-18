const { RestaurantModel } =  require('../model/restaurant')

async function fetchAll() {
  const restaurants = await RestaurantModel.find()

  return restaurants
}

async function findOrCreate(name, _id) {
  const restaurant = await RestaurantModel.findOneAndUpdate(
    { _id: _id, name: name },
    { $setOnInsert: { _id: _id, name: name } },
    { new: true, upsert: true }
  )

  return restaurant
}

module.exports = { fetchAll, findOrCreate }
