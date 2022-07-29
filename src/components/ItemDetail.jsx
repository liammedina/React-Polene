import React, { useState, useContext } from "react";
import {default as ItemCount} from "./ItemCount";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { CartContext } from "./contexts/CartContex";



const ItemDetail = (props) => {
    const cartItems = useContext(CartContext);
    const [amount, setAmount] = useState(0);
    //const { title, price, description, category, img, stock, id } = item;
    function onAdd (amount) {
        setAmount(amount);
        cartItems.addItem(props.item,amount)}
        
    return (
        <>
            { props.item !== "" && (
            <div className="card" style={{ width: "20rem" }}>
                <img className="card-img-top" src={props.item.img} alt="Card image cap" />
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title">{props.item.title}</h5>
                    <p className="textDescription">{props.item.description}</p>
                </div>
                <h4>${props.item.price}</h4>
                <div key={props.item.id} className="CardProduct">
                    <div  className="cardInfo">
                        <p className="textCategory">{props.item.category}</p>
                </div>
            <ItemCount stock={props.item.stock} initial={0} onAdd={onAdd}/>
            </div>
            
            </div>
            )}
        </>
    );
};
     
  
  export default ItemDetail; 