import React, { useState } from "react";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const ItemCount = ({stock=10, initial=0, onAdd}) => {
    const [count, setCount] = useState (initial);
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
            <Link to= 'cart/'><button onClick={() =>(count)}
            type="button"
            className=""btn btn-info
            disabled={count === "" || count === 0}>
            Agregar al carrito
            </button></Link>
        </div>
        </>
    )
    /*<div className="containerCount">
            <p className="textCount">ELIJE TUS PRODUCTOS</p>
            <div  className="ClickCount">
                <button className="buttonItem" onClick={updateCount}> - </button>
                <span className="counter">{count}</span>
                <button className="buttonItem" onClick={updateCount}> + </button>
            </div>
            <button onClick={addItem} className="addButton">AGREGAR PRODUCTOS</button>
        </div>
        function addItem (){
            Swal.fire(
                'Buena elección!',
                'Tus productos han sido agregados al carrito!',
                'success'
                )
        };*/
  
};

export default ItemCount;