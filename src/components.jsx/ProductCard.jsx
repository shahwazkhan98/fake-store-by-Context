import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'

const ProductCard = ({product}) => {



    const {id , title , image , price} = product

    const {dispatch} = useContext(CartContext)

    const handleAdd = (product) => {
        dispatch({
            type : "ADD_CART" ,
            payload : product
        })

}


  return (
    <div className="product">
    <img src={image} alt=""/>
    <h1> {title}</h1>
    <span>
       <h3>Price : {price}</h3> 
       <button className="add_cart" onClick={()=>handleAdd(product)}>Add to cart</button>
    </span>
</div>
  )
}

export default ProductCard
