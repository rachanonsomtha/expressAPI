const mongoose = require('mongoose')

var foodSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        price: {
            type: Number
        }
    },
    {
        // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
        collection: "FOODS"
    }
)

var Food = mongoose.model("foods", foodSchema)

module.exports = Food;