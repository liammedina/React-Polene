import "./ItemListContainer.css";
import "./CartWidget";
import Database from "./DataBase.jsx";
import {useEffect, useState} from "react";
import ItemList from "./ItemList";

function promiseItems () {

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve({Database});
            },2000);
        });
        
    };

function ItemListContainer ({titulo}) {
    
      const [Item, setItem] = useState([]);

         useEffect( () => {
             promiseItems().then(respuesta =>{
                 setItem(respuesta);
             })
         },[]);

    return(
         <div>
             <div>
                 <h1>{titulo}</h1>
                 <ItemList todosLosItems={Database}/> 
             </div>
         </div>
    )
}
export default ItemListContainer