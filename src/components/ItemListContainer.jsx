import "./ItemListContainer.css";
import "./CartWidget";
import Database from "./DataBase.jsx";
import {useEffect, useState} from "react";
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom' 


const ItemListContainer = () => {
    const {name} = useParams()
    const [items, setItems] = useState([]);
    const promise = new Promise ((respuesta) => {
        setTimeout(() => respuesta(Database),2000);
        });

        useEffect(() => {
            promise.then((resp) => {
                const products = resp;
                if (name) {
                    setItems(products.filter((product) => product.category == name));
                } else {
                    setItems(products);
                }
             });
            }, [name]);
        
        return(
             <div className="mt-5">
                 <ItemList items={items}/> 
             </div>
    );
};

export default ItemListContainer