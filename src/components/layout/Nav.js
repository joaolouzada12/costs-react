import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import logo from '../../img/costs_logo.png';

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Costs" />
      </div>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Home
          </NavLink>
        </li>
                <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
          Meus Projetos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/company"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Empresa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contato"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
