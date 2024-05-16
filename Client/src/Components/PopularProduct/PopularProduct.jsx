import axios from 'axios'
import React, { useEffect,useState } from 'react'
import ProductCard from'../ProductCard/ProductCard'
import './popularproduct.css'

const PopularProduct = () => {
    const[products,setProducts]=useState([])
    const getALLProducts = async()=>{
        try{
            const response= await axios.get('https://localhost:3000/api/v1/all')
            console.log(response.data.data)
            setProducts(response.data.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getALLProducts()
    },[])
  return (
    <div>
      <h1 className='heading-tag'>Popular Product</h1>
      <div className='popularproduct'>
        {products.map((product)=>{
            //FIXED KEY ISSUES HERE->USER.ID TO USER_ID
            return(
                <ProductCard productid={product._id} name={product.productName} img={product.img} price={product.price} key={product._id}/>
            )
        } )}
      </div>
    </div>
  )
}

export default PopularProduct
