import React, { useState, useContext } from "react";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import CartContext from "./contexts/CartContext";
import {GContext} from './contexts/CartContext'
import ItemCount from "./ItemCount";



const ItemDetail = (props) => {
    const cartItems = useContext(CartContext);
    const [amount, setAmount] = useState(true);
    const {addItem} = useContext(GContext);


    function onAdd (amount) {
        addItem (item, amount);
        cartItems.addItem(props.item,amount)}
       
    return (
        <>
            { props.item !== "" && (
            <div className="card" style={{ width: "20rem" }}>
                <img className="card-img-top" src={props.Item.img} alt="Card image cap" />
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title">{props.Item.title}</h5>
                    <p className="textDescription">{props.Item.description}</p>
                </div>
                <h4>${props.Item.price}</h4>
                <div key={props.Item.id} className="CardProduct">
                    <div  className="cardInfo">
                        <p className="textCategory">{props.Item.category}</p>
                </div>
            <ItemCount stock={props.Item.stock} initial={0} onAdd={onAdd}/>
            </div>
            
            </div>
            )}
        </>
    );
};
    
  
  export default ItemDetail; 