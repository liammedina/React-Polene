import "./ItemListContainer.css";
import "./CartWidget";
import Database from "./DataBase.jsx";
import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import Item from "./Item";

function getBag () {

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve({Database});
            },2000);
        });
    };
const ItemDetailContainer = () => {
    const item = {name: 'name'};
    return <ItemDetail item={item}/>
}

/* function ItemDetailContainer () {
    
      const [Bag, setBag] = useState([]);
         useEffect( () => {
            getBag().then(respuesta =>{
                 setBag(respuesta[1]);
             })
         },[]);

    return(
         <div>
            <ItemDetail itemBag={Item}/> 
         </div>
    )
} */
export default ItemDetailContainer