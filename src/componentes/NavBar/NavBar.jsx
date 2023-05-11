import'./NavBar.css'  
import Titulo from '../Titulo/Titulo'; 
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {   
    return ( 
        <div className="navbar">
            <ul className="navbar-menu"> 
                <Titulo></Titulo>
                <li  className="active" >Menu</li>
                <li>Producto</li>
                <li>Ofertas</li>
                <li>Contacto</li>   
                <input className='searcher' type="search" id="search" name="search"></input> 
                <button  className='SearchButton' type="submit">Producto</button>  
            </ul> 
            <div> 
            </div>
                <CartWidget/>
        </div>
    )
  } 
  export default NavBar
