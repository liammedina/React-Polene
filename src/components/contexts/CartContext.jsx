import { createContext, useState } from "react";
export const GContext = createContext();

const CartContext = ({ children}) => {
    const {cartItems, setCartItems}= useState([])

    const addItem = (item, quantity) => {
        const newItem = isInCart(item)
        if(newItem) {
            quantity = quantity + newItem.quantity;
            setCartItems(
                cartItems.splice(
                    cartItems.findIndex((element) => element.Iitem.id === Item.id), 
                1
            )
            )
        };
        setCartItems([...cartItems, {Item, quantity}]);
    };
    const isInCart = () => {
        cartItems.find((element) => element.item === item);
    };
    const clear = () => {setCartItems([])
    };
    const removeItem = () => {
        setCartItems(cartItems.filter(element=>element.item.id != item.id))
    };

    const total = () => {
        return cartItems.reduce(
            (valorAnterior, valorActual) => valorAnterior + valorActual.item.price * valorActual.quantity,0)
        
    }

    return <GContext.Provider value= {{cartItems, addItem, removeItem, clear, total}}>{children}</GContext.Provider>;
}
 
export default CartContext;