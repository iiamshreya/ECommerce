const product= require("../modules/product")
const cart = require("../modules/cart")

const addtoCart = async (req, res) => {
    const { productId, quantity } =req.body;
    console.log(productId)
    try {
        //check if product exists or not
        const product = await product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found"});
        }

        //check if cart exists for user
        const cart = await Cart.findOne({ user: req.userId });
        if (!cart) {
            //Create new cart
            const newCart = await Cart.create({
                user: req.userId,
                products: [{ product: productId, quantity }],
            });
            return res.status(201).json (newCart);

        }
        //Cart exists, update it
        //findIndex is array method in js.
        // finding the index (or position) of a specific product in the product array of the cart.

        //p as a placeholder for "current product being checked"
        //p.product.toString(): converts the product's indentifier from a type that might not be a  regular string (like an ObjectId in mongodb) into a standard string.


        //=== productId : this  compares the converted string to productId, which is the ID of the product we're looking for

        const index = cart.products.findIndex(
            (p) =>p.product.toString()===productId
             );
             if (index >-1){
                //index >-1 is used to verify that the product exists in the cart.products array if this condition is true ,the existing product's quantity is increased by the specified amount
                //product exists in cart,update quantity
                cart.product[index].quantity +=quantity;
             }else{
                //new product,add to cart
                cart.products.push({product:productId,quantity});
             }

             await cart.save();
             res.json({message:'product added to cart'});
             }catch(error){
                console.error(error);
                res.status(500).json9({message:"server error"});
             }
    }

 const getUserCart =async(req,res)=>{

    const cart = await Cart.findOne({user:req.userId}).populate(
        "products.product"
    );
    res.json(cart);
 }

 const deleteFromCart= async(req,res)=>{
    const {productId}=req.params;
    try{
        const cart = await Cart.findOne({user:req.userId});

        const index =cart.products.findIndex(
            (p)=>p.product.toString()===productId
        );
        console.log(index)

//if product not in cart,throw error
if (index==-1){
    return res.status(404).json({message:'product not in cart'})
}
//remove product from the cart
cart.product.splice(index,1);

//the splice method is used here to remove items from an array.

//index : this is the position of the product to be removed ,which was found using findIndex

//1:this indicates the number of items to remove from the array staring from the index.here,it means "remove exactly one items"

//save updated cart
await cart.save();

res.jsom({message:'removed from cart'});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server error"});
    }

    }
 
    module.export={
        addtoCart,
        getUserCart,
        deleteFromCart
    }
