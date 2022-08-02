import logosmall from "../Images/logosmall.png";
import "./NavBar.css" 
import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom';

function NavBar ({amountItems}){
    return(
        <nav className="App-nav">
            <Link to={'/'}><img  src= {logosmall} /></Link>
            <ul className="App-items">
                <Link to={'/Page'}><li className="link">COLECCIÓN</li></Link> 
                <Link to={'/Page'}><li className="link">STORE</li></Link>
                <Link to={'/Page'}><li className="link">BOUTIQUE</li></Link>
                <Link to={'/Page'}><li className="link">CONTACTO</li></Link>
                <CartWidget amountItems = {amountItems} />
            </ul>
        </nav>
    )
}
export default NavBar;