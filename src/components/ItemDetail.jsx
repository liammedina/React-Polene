import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { useNavigate, Link } from "react-router-dom";

const ItemDetail = ({item}) => {
    const { title, price, description, category, img, id } = item;
    return (
        <div className="card" style={{ width: "20rem" }}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{title}</h5>
                <p className="textDescription">{description}</p>
            </div>
            <h4>{price}</h4>
            <div key={id} className="CardProduct">
                <div  className="cardInfo">
                    <p className="textCategory">{category}</p>
                </div>
            </div>
        </div>
      )
  }
  
  export default ItemDetail; 