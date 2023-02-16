const { model, Schema, Types } = require('mongoose')

const DOCUMENT_NAME = 'Restaurant'
const COLLECTION_NAME = 'restaurants'

const schema = new Schema(
  {
    name: { type: Schema.Types.String, required: true }
  }
)

schema.index({ name: 1 })

const RestaurantModel = model(DOCUMENT_NAME, schema, COLLECTION_NAME)

module.exports = { RestaurantModel }
