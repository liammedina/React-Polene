import React from "react";
import {Link} from 'react-router-dom';
import img404 from '../Images/img404.jpg';

function Page(){
    return (
        <div className="conteiner">
            <img  className="img-fluid" src={img404} alt="" />
        </div>
    )
}
export default Page;