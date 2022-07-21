import React from "react";

function ItemDetail ({itemBag}) {
     return (
        <>
            <h4>{itemBag.price}</h4>
            <div key={itemBag.id} className="CardProduct">
                <img className="imgCard" src={itemBag.img} alt="" />
                <div  className="cardInfo">
                    <h3  className="textTitle">{itemBag.title}</h3>
                    <p className="textCategory">{itemBag.category}</p>
                    <p className="textDescription">{itemBag.description}</p>
                </div>
                    <h4>{itemBag.price}</h4>
            </div>
         </>
      )
  }
  export default ItemDetail; 