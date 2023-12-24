const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id:String,
    productName:String,
    brand:String,
    rating:String,
    price:Number,
    discountPercentage:Number,
    images:Array,
    processor:String,
    RAM:String,
    camera:String,
    storage:String
},{timestamps: true})

const Model = mongoose.model("initialData" , productSchema)

module.exports = Model;