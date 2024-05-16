const stripe = require('stripe')(process.env.STRIPE_SECRECT_KEY);

const Createpayment = async(req,res)=>{
    const {products}= req.body;

    const lineItems= products.map((product)=>{
        console.log(product.product)
        return{
            price_data:{
                currency:'inr',
                product_data:{
                    name:product.product.productName,
                },
                unit_amount:product.product.price *100,
            },
            quantity:product.quantity,
        }
    })
    const session = await stripe.checkout.session.create({
        payment_methond_types:['card'],
        line_items:lineItems,
        mode:'payment',
        success_url:'http://localhost:3000/success',
        cancel_url:'http://localhost:3000/cancel',
    });

    console.log(session)
    res.json({id:session.id})
}
module.exports={
    Createpayment
}