import React from "react";
import {Link} from 'react-router-dom';

const Item = ({item}) => {
    const {title, price, img, id}= item;
     return (
         <div key={id} className="card" style={{width: "17rem"}}>
            <img className="card-img-top" src={img} alt="" />
             <div  className="card-body d-flex flex-column justify-content-center">
                <h4  className="card-title">{title}</h4>
                <div>
                    <h4>${price}</h4>
                    <Link to={`item/${id}`}><button className="btn btn-primary">Ver Detalle del Producto</button></Link>
                </div>
            </div>
         </div>
      )
  }
  export default Item; 

 