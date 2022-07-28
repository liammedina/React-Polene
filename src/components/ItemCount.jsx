import React, { useState } from "react";
import Swal from 'sweetalert2';
import { Link, } from "react-router-dom";

const ItemCount = ({stock=10, initial=0, onAdd}) => {
    const [count, setCount] = useState (initial);
    const [show, setShow] = useState(true);

    function addItem (){
        Swal.fire(
            'Buena elección!',
            'Tus productos han sido agregados al carrito!',
            'success'
            )
    }
    const updateCount = (op) => {
        if(op === "-" && count > 0){
            setCount(count - 1);
        }
        if (op === "+" && count < stock) {
            setCount(count + 1);
        }
    };
    const updateCountInput = (e) => {
        const {value} = e.target;
        if(value <= stock) {
            setCount (isNaN(value) ? 0 : parseInt(value));
        }
    };
    return(
        <>
        {
            show ?
            <>
            <div className="Input-group input-spinner mb-3 d-flex justify-content-center">
            <button
            onClick={(e) => updateCount ("-")}
            className= "btn btn-icon byn-primary"
            type="button">-</button>
            
            <input onChange={(e) => updateCountInput (e)} 
            className= "border-primary"
            placeholder=""
            value={count}
            type="text" />
            <button
            onClick={(e) => updateCount ("+")}
            className= "btn btn-icon byn-primary"
            type="button">+</button>
        </div>
        <div className="d-flex justify-content-center">
            <button onClick={() =>(setShow(false))}
            type="button"
            className="btn btn-info"
            disabled={count === "" || count === 0}>
            Agregar al carrito
            </button>
        </div>
        </> :
        <div className="d-flex flex-column justify-content-center">
            <h4> Los productos fueron agregados al carrito!</h4>
            <Link to= "cart/"><button 
            type="button"
            className="btn btn-info"
            disabled= {count === "" || count === 0}>
            Finalizar compra
            </button></Link>
        </div>
        }
        </>
    )
};

export default ItemCount;