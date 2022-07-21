import logosmall from "../Images/logosmall.png";
import "./NavBar.css" 
import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom';

function NavBar (){
    return(
        <nav className="App-nav">
            <Link to={'/'}><img  src= {logosmall} /></Link>
            <ul className="App-items">
                <Link to={'/Page'}><li className="link"><a>COLECCIÓN</a></li></Link> 
                <Link to={'/Page'}><li className="link"><a>STORE</a></li></Link>
                <Link to={'/Page'}><li className="link"><a>BOUTIQUE</a></li></Link>
                <Link to={'/Page'}><li className="link"><a>CONTACTO</a></li></Link>
                <CartWidget />
            </ul>
        </nav>
    )
}
export default NavBar;