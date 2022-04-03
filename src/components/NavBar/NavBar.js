import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Buttom from '../../components/Buttom/Buttom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
                <img src={'./imagenes/logo nike.png'} className="App-logo" alt="logo" />
            </div>

            <div>
                <ul className='nav__links' >
                    <li> <a href=" ">COLECCIONES </a></li>
                    <li> <a href=" ">UNITE A NOSOTROS </a></li>
                    <li> <a href=" ">NIKE JOURNAL </a></li>
                </ul>
            </div>

            <div>
                <CartWidget />
            </div>

            <div>
                <Buttom />
            </div>

        </nav>

    )

}


export default NavBar