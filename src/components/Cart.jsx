import React, {useContext} from "react";
import { GContext } from "./contexts/CartContext";
import carrito from '../Images/carrito.jpg';
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cartItems, removeItem, clear} = useContext(GContext);
    const tot = total();
    return (
        <>
            {cartItems.length === 0 ? ( <>No hay produsctos en la cesta! Agregá algunos...<Link to={'/'}>Volver</Link> 
            </> 
            ) : (  
            <>
            {cartItems.map((element) => (<CartItem item={element.item} quantity={element.quantity} removeItem={removeItem}/>))}
            <button onClick={() => clear()}>Vaciar Carrito</button>
            <h1>El total de la compra es $ :{tot}</h1>
        </>
        )}
        </>
    )
}
export default Cart;