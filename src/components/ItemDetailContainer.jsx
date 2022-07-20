import "./ItemListContainer.css";
import "./CartWidget";
import Database from "./DataBase.jsx";
import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";

function getBag () {

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve({Database});
            },2000);
        });
        
    };

function ItemDetailContainer () {
    
      const [itemBag, setBag] = useState([]);

         useEffect( () => {
            getBag().then(respuesta =>{
                 setBag(respuesta[0]);
             })
         },[]);

    return(
         <div>
            <ItemDetail Bag={itemBag}/> 
         </div>
    )
}
export default ItemDetailContainer