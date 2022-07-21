import React from "react";
import {Link} from 'react-router-dom';

function Item ({Bag}) {
    const {title, price, img,}= Bag;
     return (
         <div key={Bag.id} className="card" style={{width: "17rem"}}>
            <img className="card-img-top" src={Bag.img} alt="" />
             <div  className="card-body d-flex flex-column justify-content-center">
                <h4  className="card-title">{Bag.title}</h4>
                <div>
                    <h4>${Bag.price}</h4>
                    <Link to={"ItemDetail"}><button className="btn btn-primary">Ver Detalle del Producto</button></Link>
                </div>
            </div>
         </div>
         
      )
  }
  export default Item; 

 