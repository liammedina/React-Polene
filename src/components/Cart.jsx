import React, {useContext} from "react";
import { CartContext } from "./contexts/CartContex";
import carrito from '../Images/carrito.jpg';

const Cart = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <div className="conteiner">
            <img className="img-fluid" src={carrito} alt="" />
        </div>
    )
}
export default Cart;