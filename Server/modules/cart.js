const mongoose= required('mongoose')

const cartSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    products:[
       {
        products:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"product"
        },
        quantity:{
            type:Number,
            default:1,

        },
       },
    ],
});

const cart =mongoose.model("cart",cartSchema);
module.exports=cart;