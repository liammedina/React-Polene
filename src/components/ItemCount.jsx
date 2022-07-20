import React, { useState } from "react";
import "./ItemCount.css";
import Swal from 'sweetalert2';

const ItemCount = () => {

    const [count, setCount] = useState (1);
    const stock = 20

        function handleSubstract() {
            if(count > 1) {
            setCount(count - 1)
        };
    };

        function handleAdd () { 
            if(count < stock){
            setCount(count +1)
            };
        }

        function addItem (){
            Swal.fire(
                'Buena elección!',
                'Tus productos han sido agregados al carrito!',
                'success'
              )
        };
    return(

        <div className="containerCount">
            <p className="textCount">ELIJE TUS PRODUCTOS</p>
            <div  className="ClickCount">
                <button className="buttonItem" onClick={handleSubstract}> - </button>
                <span className="counter">{count}</span>
                <button className="buttonItem" onClick={handleAdd}> + </button>
            </div>
            <button onClick={addItem} className="addButton">AGREGAR PRODUCTOS</button>
        </div>

    )
};

export default ItemCount;