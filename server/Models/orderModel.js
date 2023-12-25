const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    phone:Number,
    email:String,
    address: String,
    cart: [Object],
}, { timestamps: true })

const Model = mongoose.model("orders", orderSchema)

module.exports = Model;