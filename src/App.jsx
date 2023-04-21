import Footer from "./components.jsx/Footer"
import Navbar from "./components.jsx/Navbar"
import { CartProvider } from "./context/cart/CartContext"
import { ProductProvider } from "./context/product/ProductContext"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"

function App() {
  return (
    <Router>
     <ProductProvider>
     <CartProvider>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
     </CartProvider>
      <Footer/>
     </ProductProvider>
    </Router>
  )
}

export default App
