import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
    <nav >
    <div>
        <ul class='nav__links' >
            <li> <a href=" ">COLECCIONES </a></li>
            <li> <a href=" ">UNITE A NOSOTROS </a></li>
            <li> <a href=" ">NIKE JOURNAL </a></li>
        </ul>
    </div>
        
    <div>
        <CartWidget/>
    </div>
       
    </nav>    
    
    )
  
}


export default NavBar