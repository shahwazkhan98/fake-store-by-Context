import React, { useContext } from 'react'
import CartItem from '../components.jsx/CartItem'
import CartContext from '../context/cart/CartContext'

const Cart = () => {

    const {cart} = useContext(CartContext)
    
    const total = cart.reduce((p,c) => {
        return p+c.price

    },0)

    return (
        <div className="cart-container">

            <div className="cart-items">

                {
                    cart.map(cartItem => <CartItem  key={cartItem.id} cartItem={cartItem}/>)
                }
                
            </div>

            <div className="bill-section">
                <h1>Total Amount : <br /> <br /> ${total}</h1>
                <button className="pay-btn">Pay Now</button>
            </div>

        </div>
    )
}

export default Cart
