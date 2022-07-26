import "./ItemListContainer.css";
import "./CartWidget";
import Database from "./DataBase.jsx";
import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const params = useParams();
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => resolve(Database),2000);
        });
        useEffect(() => {
            promise.then((response) => {
                const foundItem = response.filter((item) => item.id == params.id);
                setItem(foundItem[0]);
            });
            },[]);
    return <ItemDetail item={item}/>
}
export default ItemDetailContainer