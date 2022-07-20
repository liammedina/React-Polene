import React from "react";
import Item from "./Item";

function ItemList( { todosLosItems }){
     return (
        <>
        {todosLosItems.map( esteItem => {
            return (
                <Item Bag={esteItem} key={esteItem.id}/>
            )
            }
        )}
         </>
     )
 }

 export default ItemList;