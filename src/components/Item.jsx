import React from "react";

function Item ({Bag}) {
     return (
         <div key={Bag.id} className="CardProduct">
            <img className="imgCard" src={Bag.img} alt="" />
             <div  className="cardInfo">
                <h3  className="textTitle">{Bag.title}</h3>
                <p className="textCategory">{Bag.category}</p>
                <div>
                    <h4>${Bag.price}</h4>
                    <button>Ver Más</button>
                </div>
            </div>
         </div>
         
      )
  }
  export default Item; 

 