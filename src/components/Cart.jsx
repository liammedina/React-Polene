import React from "react";
import carrito from '../Images/carrito.jpg';

function Cart(){
    return (
        <div className="conteiner">
            <img className="img-fluid" src={carrito} alt="" />
        </div>
    )
}
export default Cart;