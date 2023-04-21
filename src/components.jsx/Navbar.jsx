import { useContext } from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../context/cart/CartContext'

const Navbar = () => {

const {cart } = useContext (CartContext)



  return (
    <nav>
       <Link to={"/"}><h1 className="logo">My.Store</h1></Link>
        <ul className="nav-links">
            <li className="category">Electronics</li>
            <li className="category">Jewelery</li>
            <li className="category">Men's Clothing</li>
            <li className="category">Women's Clothing</li>
            <Link to={"/Cart"}><li> <button className="cart" > Cart {cart.length} </button> </li></Link>
        </ul>
    </nav>
  )
}

export default Navbar
