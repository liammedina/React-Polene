import React from "react";


const CartItem = ({item, quantity, removeItem}) => {
    return (
        <div className="detalleProductos">
            {item.title} - ${item.price} - {quantity}
            <button className="btn " onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
    )
}
 
export default CartItem;