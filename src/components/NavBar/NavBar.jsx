import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <nav className="NavBar">
      <Link to="/">
        <h3>Electro-Store</h3>
      </Link>
      <div className="Categories">
        <NavLink to={`/category/Televisor`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Televisores</NavLink>
        <NavLink to={`/category/Portatil`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Portatiles</NavLink>
        <NavLink to={`/category/Celular`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink> 
      </div>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;

