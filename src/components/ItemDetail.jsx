import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Database from "./DataBase";
import Swal from 'sweetalert2';


const ItemDetail = ({item}) => {
    const [amount, setAmount] = useState(0);
    const { title, price, description, category, img, stock, id } = item;
    const onAdd = (amount) => {
        setAmount(amount);
        
    };
    return (
        <div className="card" style={{ width: "20rem" }}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{title}</h5>
                <p className="textDescription">{description}</p>
            </div>
            <h4>${price}</h4>
            <div key={id} className="CardProduct">
                <div  className="cardInfo">
                    <p className="textCategory">{category}</p>
                </div>
                
            </div>
        {amount == 0 && <ItemCount stock={stock} initial={0} onAdd={onAdd}/>}
        </div>
      )
  }
  
  export default ItemDetail; 