import React, { useContext, useState } from 'react'
import CartContext from '../context/cart/CartContext'

const CartItem = ({cartItem}) => {

const {dispatch} = useContext(CartContext)

const handleRemove = (id)=>{
  dispatch({
    type : "REMOVE_PRODUCT",
    payload : id
  })

}
const [qty , setQty] = useState(2)

  return (
    <div className="cart-item">
    <img src={cartItem.image} alt=""/>
   <span>
    <h1>{cartItem.title}</h1>
    <h3>Rate : ${cartItem.price}</h3>
    <h1>Qty : 1</h1>
   </span>
   <button className="remove-btn"onClick={()=>handleRemove(cartItem.id)}>Remove Item</button>
</div>
  )
}

export default CartItem
