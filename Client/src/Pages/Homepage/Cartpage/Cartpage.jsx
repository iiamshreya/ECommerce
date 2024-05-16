import { RiDeleteBinFill } from "react-icons/ri";
import React, { useEffect, useState } from 'react'

const Cartpage = () => {
    const [products,setproducts]=useState([]);
    useEffect(()=>{
        const getCartItems=async()=>{
            const response = await axios.get('http://localhost:3000/api/v1/getusercart',{
                withCredentials:true
            })
            setproducts(response.data.product)
        }
        getCartItems()
    },[])

    if (!products.length){
        return(
            <div style={{padding:'20px'}}>
                <h1>Cart page</h1>
                <h2>Your cart is empty</h2>
                <Link to='/'>Continue shopping</Link>

            </div>
        )
    }
    const deleteFromCart = async (productId) => {
        const response = await axios.delete('http://localhost:3000/api/v1/delete/${productId}', {
            withCredentials: true
        })
        if (response.data.message === 'Removed from cart') {
            setproducts(products.filter((product) => product.product_id !== productId))
        }
    }
    return (
        <div style={{ padding: "20px" }}>
            <h1>Cart Page</h1>

            {product.map((product) => (
                <div key={product.product_id} style={{ marginBottom: "10px" }}>
                    <h2>{product.product.productName}</h2>
                    <p><img src={product.product.img} alt="img" /></p>
                    <p>price:₹{product.product.price}</p>
                    <p>Discount:{product.product.discount}</p>

                    <button style={{ display: "flex", alignItems: "center" }} onClick={() => deleteFromCart(product.product_id)}>
                        <RiDeleteBinFill size={20} style={{ marginRight: "5px" }}
                        />Delete </button>
                </div>
            )
            )}
        </div>
    )
}

export default Cartpage