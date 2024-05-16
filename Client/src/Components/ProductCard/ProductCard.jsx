
import {Link } from "react-router-dom"

const ProductCard =({productid,name,price,img}) =>{
    return(
        <Link to={`/product/${productid}`}>
            <div>
                <img className="product-img" src={img} alt="product"/>
            </div>
            <div>
                <h1>{name}</h1>
                <h3>${price}</h3>
            </div>
            <div>Add to cart</div>
        </Link> 
    )
}
export default ProductCard