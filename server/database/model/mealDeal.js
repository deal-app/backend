const {model, Schema, Types} = require('mongoose')

const DOCUMENT_NAME = 'MealDeal'
const COLLECTION_NAME = 'mealDeals'

const schema = new Schema(
    {
        name: {type: Schema.Types.String, required: true},
        image: {type: Schema.Types.String, required: true},
        description: {type: Schema.Types.String, required: true},
        price: {type: Schema.Types.String, required: true},
        restaurantID: {type: Schema.Types.Number, required: true}
    }
)

schema.index({restaurantID: 1})

const MealDealModel = model(DOCUMENT_NAME, schema, COLLECTION_NAME)

module.exports = {MealDealModel}

