const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    price:{
        type:Number
    },
    Discount:{
        type:Number
    },
    outStock:{
        type:Boolean
    },
    img:{
        type:String
    }
}, { timestamps:true}) //automatically manages when document is created or updated

const product = mongoose.model('product',productSchema)
module.exports= product