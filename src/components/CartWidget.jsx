 import shoppingCart from "../Images/shoppingCart.png"
 import { useContext } from "react"
 import { CartContext } from "./contexts/CartContex"

 const CartWidget = () =>{
    const cartItems = useContext(CartContext);

     return (
         <>
         <img src={shoppingCart} alt="" />
         <span className='parrafo'>{cartItems.howManyItems()>0 && cartItems.howManyItems()
         }</span>
         </>
     )
 }
 export default CartWidget;