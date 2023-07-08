import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavBar = () => {

  return (
    <nav className={styles.navbar}>
      <Link className={styles.logo} to="/">
        <h3 className={styles.nameLogo}>Electro-Store</h3>
      </Link>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarItem}>
          <NavLink to="/" className={styles.navbarLink}>
            Inicio
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink to={`/category/Televisor`} className={styles.navbarLink}>
            Televisores
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink to={`/category/Celular`} className={styles.navbarLink}>
            Celulares
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink to={`/category/Portatil`} className={styles.navbarLink}>
            Portatiles
          </NavLink>
        </li>
      </ul>
      <CartWidget/>
    </nav>
  );
}

export default NavBar;

