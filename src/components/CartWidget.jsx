 import shoppingCart from "../Images/shoppingCart.png"
 import { useContext } from "react"
 import { GContext } from "./contexts/CartContext"

 import { Link } from "react-router-dom"

 const CartWidget = () =>{
    const cartItems = useContext(GContext);

     return (
         <>
         {cartItems.length === 0 ? (
             <></>
             ) : (
            <div>
             <img src={shoppingCart} alt="" />
             <Link to={'/cart'}><span className='parrafo'>{cartItems.howManyItems()> 0 && cartItems.howManyItems()}</span></Link>
            </div>
         )}
         </>
     );
 }
 export default CartWidget;