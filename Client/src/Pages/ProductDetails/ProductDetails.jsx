import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const{ id }=useParams() 
    const[product,setProduct]=useState({})
    const navigate = useNavigate()

    const getSingleProduct = async()=>{
        try{
            const response= await axios.get(`http://localhost:3000/api/v1/single/${id}`)
            setProduct(response.data.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getSingleProduct()
    },[id])
  return (
    <div>
      <h1>Product Details</h1>
      <div className='productdetails-container'>
        <div>
        <img className='image' src={product.img} alt='pr-img'/>
        </div>
      </div>
      <div>
        <h1 className='name'>{product.productName}</h1>
        <h2 className='name2'>{product.price}</h2>
        <button className='cart'>Add to cart</button>
      </div>

    </div>
  )
}

export default ProductDetails
