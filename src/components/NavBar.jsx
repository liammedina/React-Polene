import logosmall from "../Images/logosmall.png";
import "./NavBar.css" 
import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom';

function NavBar (){
    return(
        <nav className="App-nav">
            <Link to={'/'}><img  src= {logosmall} /></Link>
            <ul className="App-items">
                <li className="link"><a>COLECCIÓN</a></li>
                <li className="link"><a>STORE</a></li>
                <li className="link"><a>BOUTIQUE</a></li>
                <li className="link"><a>CONTACTO</a></li>
                <CartWidget /> 
            </ul>
        </nav>
    )
}
export default NavBar;