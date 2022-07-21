import React from "react";
import Item from "./Item";

function ItemList( { todosLosItems }){
     return (
         <div className="container">
            <div className="row">
                {todosLosItems.map( esteItem => {
                 return (
                    <div className="col-sm mt-5"><Item Bag={esteItem} key={esteItem.id}/></div>
                    )
                }
                )}
            </div>
         </div>
     )
 }

 export default ItemList;