const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    tags: [String]
})

const ProductModel = mongoose.model('Product', productsSchema)

module.exports = ProductModel