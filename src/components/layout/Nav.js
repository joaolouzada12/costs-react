import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
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
            to="/newproject"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            New Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/company"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Company
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
