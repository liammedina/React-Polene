import logosmall from "../Images/logosmall.png";
import "./NavBar.css" 
import CartWidget from "./CartWidget";

function NavBar (){
    return(
        <nav className="App-nav">
            <img  src= {logosmall} />
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